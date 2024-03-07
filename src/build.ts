import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";
import tailwind, { Mode, themeColors } from "./airfoil";

export default () => {
    const dir = {
        themes: resolve(dirname(import.meta.dirname), "themes"),
        terminal: resolve(dirname(import.meta.dirname), "terminal"),
    };

    // https://tailwindcss.com/docs/customizing-colors

    const defaultTheme = {
        dark: themeColors(Mode.Dark, "zinc", "blue"),
        light: themeColors(Mode.Light, "zinc", "blue"),
    };

    const stoneTheme = {
        dark: themeColors(Mode.Dark, "stone", "red"),
        light: themeColors(Mode.Light, "stone", "red"),
    };

    const zincCyanTheme = {
        dark: themeColors(Mode.Dark, "zinc", "cyan"),
        light: themeColors(Mode.Light, "zinc", "cyan"),
    };

    mkdir(dir.themes, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(
                    `${dir.themes}/airfoil-dark-color-theme.json`,
                    JSON.stringify(tailwind(defaultTheme.dark), null, 4),
                ),
                writeFile(
                    `${dir.themes}/airfoil-light-color-theme.json`,
                    JSON.stringify(tailwind(defaultTheme.light), null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));

    mkdir(dir.terminal, { recursive: true })
        .then(() =>
            Promise.all([
                writeFile(
                    `${dir.terminal}/dark.json`,
                    JSON.stringify(defaultTheme.dark.terminal, null, 4),
                ),
                writeFile(
                    `${dir.terminal}/light.json`,
                    JSON.stringify(defaultTheme.light.terminal, null, 4),
                ),
            ]),
        )
        .catch(() => process.exit(1));
};
