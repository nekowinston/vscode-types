#!/usr/bin/env tsx
import * as path from "node:path";
import { runTests } from "@vscode/test-electron";
import tsup from "tsup";

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
