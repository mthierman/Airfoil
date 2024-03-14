import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import manifest from "../package.json" with { type: "json" };
import { makeTheme } from "./config";
import generateTerminal from "./generateTerminal";
import generateTheme from "./generateTheme";

export default () => {
    const outdir = {
        themes: resolve(dirname(import.meta.dirname), "themes"),
        terminal: resolve(dirname(import.meta.dirname), "terminal"),
    };

    let themePromises: Promise<void>[] = [];
    let terminalPromises: Promise<void>[] = [];
    let terminalThemes: unknown[] = [];

    const themes = manifest.contributes.themes;

    mkdir(outdir.themes, { recursive: true })
        .then(() => {
            for (const theme of themes) {
                themePromises.push(
                    writeFile(
                        resolve(dirname(import.meta.dirname), theme.path),
                        JSON.stringify(
                            generateTheme(makeTheme(theme.mode, theme.tone, theme.accent)),
                            null,
                            4,
                        ),
                    ),
                );
            }

            Promise.all(themePromises);
        })
        .catch(() => process.exit(1));

    mkdir(outdir.terminal, { recursive: true })
        .then(() => {
            for (const theme of themes) {
                terminalPromises.push(
                    writeFile(
                        resolve(
                            dirname(import.meta.dirname),
                            theme.path.replace("./themes/", "./terminal/"),
                        ),
                        JSON.stringify(
                            generateTerminal(makeTheme(theme.mode, theme.tone, theme.accent)),
                            null,
                            4,
                        ),
                    ),
                );

                terminalThemes.push(
                    generateTerminal(makeTheme(theme.mode, theme.tone, theme.accent)),
                );
            }

            Promise.all(terminalPromises).then(() => {
                writeFile(
                    resolve(dirname(import.meta.dirname), "terminal", "all.json"),
                    JSON.stringify(terminalThemes, null, 4),
                );
            });
        })
        .catch(() => process.exit(1));
};
