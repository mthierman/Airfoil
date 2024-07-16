import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateTerminal } from "../modules/generators.mjs";
import manifest from "../package.json" with { type: "json" };

const outdir = {
    themes: resolve(import.meta.dirname, "..", "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "..", "terminal"),
};

// ======

await mkdir(outdir.themes, { recursive: true });

const themes = manifest.contributes.themes;

let themePromises: Promise<void>[] = [];

for (const theme of themes) {
    themePromises.push(
        writeFile(
            resolve(import.meta.dirname, "..", "..", theme.path),
            JSON.stringify(generateTheme(makeTheme(theme)), null, 4),
        ),
    );
}

await Promise.all(themePromises);

// ======

await mkdir(outdir.terminal, { recursive: true });

await Promise.all([
    writeFile(resolve(outdir.terminal, "dark.json"), generateTerminal("Dark")),
    writeFile(resolve(outdir.terminal, "light.json"), generateTerminal("Light")),
]);
