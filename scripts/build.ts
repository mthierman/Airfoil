import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateTerminal, generateTheme } from "../modules/generators.mjs";
import type { Accent, Mode, Tone } from "../modules/types.mjs";
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
    console.log(resolve(outdir.themes, "..", theme.path));
    themePromises.push(
        writeFile(
            resolve(outdir.themes, "..", theme.path),
            generateTheme(theme.mode as Mode, theme.tone as Tone, theme.accent as Accent),
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
