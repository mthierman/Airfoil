import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateTerminal } from "../modules/generators.mjs";

const outdir = {
    themes: resolve(import.meta.dirname, "..", "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "..", "terminal"),
};

await mkdir(outdir.terminal, { recursive: true });

await Promise.all([
    writeFile(resolve(outdir.terminal, "dark.json"), generateTerminal("Dark")),
    writeFile(resolve(outdir.terminal, "light.json"), generateTerminal("Light")),
]);
