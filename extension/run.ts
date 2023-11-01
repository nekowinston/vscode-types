import vscode from "vscode";
import * as fs from "fs-extra";
import * as path from "node:path";
import { normalizeSchema } from "./normalize-schema";
import { URI_LIST } from "./uri-list";

const RESOURCES_PATH_ROOT = path.resolve(__dirname, "../../schemas");

export const run = async () => {
  await new Promise((resolve) => setTimeout(resolve, 10 * 1000));

  await Promise.all(
    URI_LIST.map(async (uri) => {
      console.log(`Extract: ${uri}`);

      const json = await vscode.workspace
        .openTextDocument(vscode.Uri.parse(uri))
        .then(
          (doc) => doc.getText(),
          (err) => {
            console.error(err);
            return null;
          },
        );

      if (!json) {
        console.log(`Ignore: ${uri}`);
        return;
      }
      const normalizedJson = normalizeJson(json, uri);

      const resourcePath = path.join(
        RESOURCES_PATH_ROOT,
        `${uri.replaceAll("vscode://", "vscode")}.json`,
      );
      console.log(`Wrote: ${uri}, ${json.length}`);
      await fs.emptyDir(path.dirname(resourcePath));
      await fs.writeFile(resourcePath, normalizedJson);

      const newUriList = [
        ...normalizedJson.matchAll(/"(vscode:\/\/[^"]+)"/g),
      ].map((m) => {
        const vscodeUri = new URL(m[1]);
        vscodeUri.hash = "";
        return vscodeUri.toString();
      });
      if (newUriList.length) {
        console.log(newUriList);
      }
    }),
  );
};

const normalizeJson = (json, uri) => {
  const object = JSON.parse(json);

  if (uri.startsWith("vscode://schemas/")) {
    normalizeSchema(object);
  }

  return `${JSON.stringify(object, null, 2)}\n`;
};
