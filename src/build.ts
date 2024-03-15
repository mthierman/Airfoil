import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import manifest from "../package.json" with { type: "json" };
import generateTerminal from "./generateTerminal";
import generateTheme from "./generateTheme";
import makeTheme from "./makeTheme";
import type { ThemeManifest } from "./types";

export default () => {
    const outdir = {
        themes: resolve(dirname(import.meta.dirname), "themes"),
        terminal: resolve(dirname(import.meta.dirname), "terminal"),
    };

    const themes = manifest.contributes.themes as ThemeManifest[];

    mkdir(outdir.themes, { recursive: true })
        .then(() => {
            let promise: Promise<void>[] = [];

            for (const theme of themes) {
                promise.push(
                    writeFile(
                        resolve(dirname(import.meta.dirname), theme.path),
                        JSON.stringify(generateTheme(makeTheme(theme)), null, 4),
                    ),
                );
            }

            Promise.all(promise);
        })
        .catch(() => process.exit(1));

    mkdir(outdir.terminal, { recursive: true })
        .then(() => {
            let promise: Promise<void>[] = [];
            let all: unknown[] = [];

            for (const theme of themes) {
                promise.push(
                    writeFile(
                        resolve(
                            dirname(import.meta.dirname),
                            theme.path.replace("./themes/", "./terminal/"),
                        ),
                        JSON.stringify(generateTerminal(makeTheme(theme)), null, 4),
                    ),
                );

                all.push(generateTerminal(makeTheme(theme)));
            }

            Promise.all(promise).then(() => {
                writeFile(
                    resolve(dirname(import.meta.dirname), "terminal", "all.json"),
                    JSON.stringify(all, null, 4),
                );
            });
        })
        .catch(() => process.exit(1));
};
