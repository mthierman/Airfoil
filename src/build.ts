import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import airfoil, { Mode, terminal, themeColors } from "./airfoil";

export default () => {
    const outdir = {
        themes: resolve(dirname(import.meta.dirname), "themes"),
        terminal: resolve(dirname(import.meta.dirname), "terminal"),
    };

    const defaultColors = {
        dark: themeColors(Mode.Dark, "zinc", "blue"),
        light: themeColors(Mode.Light, "zinc", "blue"),
    };

    const stoneRed = {
        dark: themeColors(Mode.Dark, "stone", "red"),
        light: themeColors(Mode.Light, "stone", "red"),
    };

    const zincCyan = {
        dark: themeColors(Mode.Dark, "zinc", "cyan"),
        light: themeColors(Mode.Light, "zinc", "cyan"),
    };

    mkdir(outdir.themes, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(
                    `${outdir.themes}/${defaultColors.dark.filename}`,
                    JSON.stringify(airfoil(defaultColors.dark), null, 4),
                ),
                writeFile(
                    `${outdir.themes}/${defaultColors.light.filename}`,
                    JSON.stringify(airfoil(defaultColors.light), null, 4),
                ),
                writeFile(
                    `${outdir.themes}/${stoneRed.dark.filename}`,
                    JSON.stringify(airfoil(stoneRed.dark), null, 4),
                ),
                writeFile(
                    `${outdir.themes}/${stoneRed.light.filename}`,
                    JSON.stringify(airfoil(stoneRed.light), null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));

    mkdir(outdir.terminal, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(
                    `${outdir.terminal}/airfoil-dark.json`,
                    JSON.stringify(terminal(defaultColors.dark), null, 4),
                ),
                writeFile(
                    `${outdir.terminal}/airfoil-light.json`,
                    JSON.stringify(terminal(defaultColors.light), null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));
};
