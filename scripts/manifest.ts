import { writeFile } from "node:fs/promises";
import { resolve } from "node:path";
import type { Accent, Mode, ThemeInfo, Tone } from "../modules/types.mjs";
import manifest from "../package.json" with { type: "json" };

const modes: Mode[] = ["Light", "Dark"];
const tones: Tone[] = ["Slate", "Gray", "Zinc", "Neutral", "Stone"];
const accents: Accent[] = [
    "Red",
    "Orange",
    "Amber",
    "Yellow",
    "Lime",
    "Green",
    "Emerald",
    "Teal",
    "Cyan",
    "Sky",
    "Blue",
    "Indigo",
    "Violet",
    "Purple",
    "Fuchsia",
    "Pink",
    "Rose",
];

const themes: ThemeInfo[] = [];

for (const mode of modes) {
    for (const tone of tones) {
        for (const accent of accents) {
            themes.push({
                label: `Airfoil ${mode} ${tone} ${accent}`,
                mode: `${mode}`,
                tone: `${tone}`,
                accent: `${accent}`,
                uiTheme: mode === "Light" ? "vs" : "vs-dark",
                path: `./themes/airfoil-${mode.toLowerCase()}-${tone.toLowerCase()}-${accent.toLowerCase()}-color-theme.json`,
            });
        }
    }
}

writeFile(
    resolve(import.meta.dirname, "..", "package.json"),
    JSON.stringify(
        {
            ...manifest,
            contributes: {
                themes: [...themes],
            },
        },
        null,
        4,
    ),
);
