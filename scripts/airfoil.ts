// import Color from "colorjs.io";
import { mkdir, writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import { generateTerminal, generateTheme, makeTheme } from "../modules/generators.mjs";
import type { Theme } from "../modules/types.mjs";
import manifest from "../package.json" with { type: "json" };

const outdir = {
    themes: resolve(import.meta.dirname, "..", "..", "themes"),
    terminal: resolve(import.meta.dirname, "..", "..", "terminal"),
};

const themes = manifest.contributes.themes as Theme[];

await mkdir(outdir.themes, { recursive: true });

let themePromises: Promise<void>[] = [];

for (const theme of themes) {
    themePromises.push(
        writeFile(
            resolve(import.meta.dirname, "..", "..", theme.path),
            JSON.stringify(generateTheme(makeTheme(theme)), null, 4),
        ),
    );
}

Promise.all(themePromises);

await mkdir(outdir.terminal, { recursive: true });

let terminalPromises: Promise<void>[] = [];
let allTerminalThemes: unknown[] = [];

for (const theme of themes) {
    terminalPromises.push(
        writeFile(
            resolve(
                import.meta.dirname,
                "..",
                "..",
                theme.path.replace("./themes/", "./terminal/"),
            ),
            JSON.stringify(generateTerminal(makeTheme(theme)), null, 4),
        ),
    );

    allTerminalThemes.push(generateTerminal(makeTheme(theme)));
}

await Promise.all(terminalPromises);

writeFile(
    resolve(import.meta.dirname, "..", "..", "terminal", "all.json"),
    JSON.stringify(allTerminalThemes, null, 4),
);
