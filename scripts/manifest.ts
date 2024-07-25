import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateManifest } from "../modules/generator.mjs";

await writeFile(resolve(import.meta.dirname, "..", "package.json"), generateManifest());
