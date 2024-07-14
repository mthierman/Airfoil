import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "../modules/types.mjs";
import tailwindConfig from "../tailwind.config.js";

type Tailwind = Omit<DefaultColors, "inherit" | "current" | "transparent" | "black" | "white"> & {
    transparent?: "#00000000";
};

export type Scale =
    | "50"
    | "100"
    | "200"
    | "300"
    | "400"
    | "500"
    | "600"
    | "700"
    | "800"
    | "900"
    | "950";

export type Tone = "Slate" | "Gray" | "Zinc" | "Neutral" | "Stone";

export type Accent =
    | "Red"
    | "Orange"
    | "Amber"
    | "Yellow"
    | "Lime"
    | "Green"
    | "Emerald"
    | "Teal"
    | "Cyan"
    | "Sky"
    | "Blue"
    | "Indigo"
    | "Violet"
    | "Purple"
    | "Fuchsia"
    | "Pink"
    | "Rose";

function convertColor(colors: Record<string, Color | string>) {
    Object.entries(colors).forEach(([key, value]: [string, Color | string]) => {
        if (value instanceof Color) {
            colors[key] = value.toString({ format: "hex" });
        }
        if (typeof value === "string") {
            colors[key] = new Color(value);
        }
    });
    return colors;
}

const { inherit, current, transparent, black, white, ...colors } =
    resolveConfig(tailwindConfig).theme.colors;
const tailwind: Tailwind = { ...colors };

// console.log(convertColor(tailwind));
const amber = convertColor(tailwind.amber);
console.log(amber);
