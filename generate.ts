#!/usr/bin/env tsx
import * as fs from "node:fs/promises";
import * as path from "node:path";
import consola from "consola";
import tsup from "tsup";
import { compile } from "json-schema-to-typescript";
import { pascalCase, splitByCase } from "scule";
import prettier from "prettier";
import { runTests } from "@vscode/test-electron";

const __dirname = path.dirname(new URL(import.meta.url).pathname);
const extensionDevelopmentPath = path.join(__dirname, "extension/dist");
const extensionTestsPath = path.join(extensionDevelopmentPath, "run.cjs");

await tsup.build({
  clean: true,
  sourcemap: true,
  outDir: extensionDevelopmentPath,
  entryPoints: [path.join(__dirname, "extension/run.ts")],
  external: ["vscode"],
});

await runTests({
  extensionDevelopmentPath,
  extensionTestsPath,
  version: "stable",
});

const schemaRoot = path.join(__dirname, "schemas");

const bannerComment = (name: string, url: string) => `/* eslint-disable */
// This file was automatically generated.
// DO NOT MODIFY IT BY HAND.

/**
 * Type definitions for ${name}, generated from \`${url}\`.
 * @see https://github.com/nekowinston/vscode-types
 */`;

// TODO: everything commented out is not working yet
const mappings = [
  "argv",
  "color-theme",
  "extensions",
  "global-snippets",
  "icon-theme",
  "icons",
  "ignoredSettings",
  "keybindings",
  "language-configuration",
  // "launch",
  "product-icon-theme",
  "snippets",
  "tasks",
  "textmate-colors",
  "token-styling",
  // "vscode-extensions",
  "vscode-product",
  "workbench-colors",
  // "workspaceConfig",
];

mappings.map(async (mapping) => {
  consola.info(`Processing ${mapping}`);
  const name = pascalCase(splitByCase(mapping, ["-"]));
  const inFile = path.join(schemaRoot, `${mapping}.json`);
  const outFile = path.join(__dirname, `src/${name}.d.ts`);

  const json = JSON.parse(await fs.readFile(inFile, "utf-8"));
  const typeDefs = await compile(json, name, {
    additionalProperties: false,
    bannerComment: bannerComment(name, `vscode://schemas/${mapping}.json`),
    format: false,
    maxItems: 1024,
    strictIndexSignatures: true,
    $refOptions: {
      resolve: {
        vscode: {
          order: 1,
          canRead: /^vscode:\/\//i,
          read: async (file) => {
            const stripped = file.url.replace("vscode://schemas/", "");
            const url = path.join(schemaRoot, `${stripped}.json`);
            return fs.readFile(url, "utf-8");
          },
        },
      },
    },
  });
  const formatted = await prettier.format(typeDefs, { parser: "typescript" });
  await fs.writeFile(outFile, formatted, "utf-8");
  consola.info(`Wrote ${path.relative(__dirname, outFile)}`);
});
