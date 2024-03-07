import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import airfoil, { Mode, themeColors } from "./airfoil";

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
                    `${outdir.themes}/airfoil-dark-color-theme.json`,
                    JSON.stringify(airfoil(defaultColors.dark), null, 4),
                ),
                writeFile(
                    `${outdir.themes}/airfoil-light-color-theme.json`,
                    JSON.stringify(airfoil(defaultColors.light), null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));

    mkdir(outdir.terminal, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(
                    `${outdir.terminal}/dark.json`,
                    JSON.stringify(defaultColors.dark.terminal, null, 4),
                ),
                writeFile(
                    `${outdir.terminal}/light.json`,
                    JSON.stringify(defaultColors.light.terminal, null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));
};
