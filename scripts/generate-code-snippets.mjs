import { mkdirSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { codeToHtml } from "shiki";
import { codeSnippetSource } from "./code-snippets-source.mjs";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const outputPath = path.resolve(
  __dirname,
  "../src/generated/codeSnippetHtml.ts",
);

const highlightSnippets = async (value) => {
  if (value && typeof value === "object" && "code" in value && "lang" in value) {
    return codeToHtml(value.code, {
      lang: value.lang,
      theme: "vitesse-black",
    });
  }

  return Object.fromEntries(
    await Promise.all(
      Object.entries(value).map(async ([key, nestedValue]) => [
        key,
        await highlightSnippets(nestedValue),
      ]),
    ),
  );
};

const highlighted = await highlightSnippets(codeSnippetSource);

mkdirSync(path.dirname(outputPath), { recursive: true });
writeFileSync(
  outputPath,
  `export const codeSnippetHtml = ${JSON.stringify(highlighted, null, 2)} as const;\n`,
);
