import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateManifest } from "../modules/generators.mjs";

await writeFile(resolve(import.meta.dirname, "..", "package.json"), generateManifest());
