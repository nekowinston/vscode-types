#!/usr/bin/env tsx
import * as fs from "node:fs/promises";
import * as path from "node:path";

import { compile, JSONSchema } from "json-schema-to-typescript";
import { pascalCase, splitByCase } from "scule";

const schemaRoot = path.join(
  __dirname,
  "vendor/extract-vscode-schemas/resources/vscode/schemas"
);

const toPascal = (str: string) => pascalCase(splitByCase(str, ["-"]));

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
  // "keybindings",
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
        await fs.writeFile(outFile, typeDefs, "utf-8");
      })
    );
});

// const tpl = mappings
//   .map((mapping) => {
//     const name = toPascal(mapping);
//     return `export type { ${name} } from "./${name}";`;
//   })
//   .join("\n");
// fs.writeFile(path.join(__dirname, "src/index.d.ts"), tpl, "utf-8");
