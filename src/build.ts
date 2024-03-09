import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import manifest from "../package.json" with { type: "json" };
import airfoil, { Mode } from "./airfoil";
import terminal from "./terminal";
import themeColors from "./themeColors";

export default () => {
    const outdir = {
        themes: resolve(dirname(import.meta.dirname), "themes"),
        terminal: resolve(dirname(import.meta.dirname), "terminal"),
    };

    let files: Promise<void>[] = [];

    const themes = manifest.contributes.themes;

    mkdir(outdir.themes, { recursive: true })
        .then(() => {
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

    mkdir(outdir.terminal, { recursive: true })
        .then(() => {
            for (const theme of themes) {
                files.push(
                    writeFile(
                        resolve(
                            dirname(import.meta.dirname),
                            theme.path.replace("./themes/", "./terminal/"),
                        ),
                        JSON.stringify(
                            terminal(
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
        })
        .catch(() => process.exit(1));
};
