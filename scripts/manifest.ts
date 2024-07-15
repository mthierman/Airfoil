import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateManifest } from "../modules/generators.mjs";

console.log(resolve(import.meta.dirname, "..", "..", "package.json"));

await writeFile(resolve(import.meta.dirname, "..", "package.json"), generateManifest());
