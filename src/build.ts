import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import manifest from "../package.json" with { type: "json" };
import airfoil, { Mode, terminal, themeColors } from "./airfoil";

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

            // Promise.all([
            //     writeFile(
            //         `${outdir.terminal}/airfoil-dark.json`,
            //         JSON.stringify(terminal(defaultColors.dark), null, 4),
            //     ),
            //     writeFile(
            //         `${outdir.terminal}/airfoil-light.json`,
            //         JSON.stringify(terminal(defaultColors.light), null, 4),
            //     ),
            // ]);
        })
        .catch(() => process.exit(1));
};
