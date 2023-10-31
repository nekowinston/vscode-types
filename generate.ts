#!/usr/bin/env tsx
import * as fs from "node:fs/promises";
import * as path from "node:path";
import { compile } from "json-schema-to-typescript";
import { pascalCase, splitByCase } from "scule";
import prettier from "prettier";

const schemaRoot = path.join(
  __dirname,
  "vendor/extract-vscode-schemas/resources/vscode/schemas"
);

const bannerComment = `/* eslint-disable */
/**
 * This file was automatically generated.
 * DO NOT MODIFY IT BY HAND.
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

mappings.forEach(async (mapping) => {
  const name = pascalCase(splitByCase(mapping, ["-"]));
  const inFile = path.join(schemaRoot, `${mapping}.json`);
  const outFile = path.join(__dirname, `src/${name}.d.ts`);

  await fs
    .readFile(inFile, "utf-8")
    .then((data) => JSON.parse(data))
    .then((data) =>
      compile(data, name, {
        additionalProperties: false,
        bannerComment,
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
                return await fs.readFile(url, "utf-8");
              },
            },
          },
        },
      }).then(async (typeDefs) => {
        const formatted = await prettier.format(typeDefs, {
          parser: "typescript",
        });
        await fs.writeFile(outFile, formatted, "utf-8");
      })
    );
});
