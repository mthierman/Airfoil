import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import manifest from "../package.json" with { type: "json" };
import airfoil, { Mode, themeColors } from "./airfoil";

const outdir = {
    themes: resolve(dirname(import.meta.dirname), "themes"),
    terminal: resolve(dirname(import.meta.dirname), "terminal"),
};

let files: Promise<void>[] = [];

mkdir(outdir.themes, { recursive: true })
    .then(() => {
        const themes = manifest.contributes.themes;

        for (const theme of themes) {
            files.push(
                writeFile(
                    resolve(dirname(import.meta.dirname), theme.path),
                    JSON.stringify(
                        airfoil(
                            themeColors(
                                Mode[theme.mode as keyof typeof Mode],
                                theme.tone,
                                theme.accent,
                            ),
                        ),
                        null,
                        4,
                    ),
                ),
            );
        }

        Promise.all(files);
    })
    .catch(() => process.exit(1));
