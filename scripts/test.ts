import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "../modules/types.mjs";
import tailwindConfig from "../tailwind.config.js";

type Tailwind = Omit<DefaultColors, "inherit" | "current" | "transparent" | "black" | "white"> & {
    transparent?: "#00000000";
};

interface TailwindColor {
    [index: string]: string | Color;
    "50": string | Color;
    "100": string | Color;
    "200": string | Color;
    "300": string | Color;
    "400": string | Color;
    "500": string | Color;
    "600": string | Color;
    "700": string | Color;
    "800": string | Color;
    "900": string | Color;
    "950": string | Color;
}

function toColor(color: TailwindColor): TailwindColor {
    const copy = Object.assign({}, color);
    for (const [key, value] of Object.entries(color)) {
        copy[key] = new Color(value);
    }
    return copy;
}

function toHex(color: TailwindColor): TailwindColor {
    const copy = Object.assign({}, color);
    for (const [key, value] of Object.entries(color)) {
        copy[key] = value.toString({ format: "hex" });
    }
    return copy;
}

const { inherit, current, transparent, black, white, ...colors } =
    resolveConfig(tailwindConfig).theme.colors;
const tailwind: Tailwind = { ...colors };

// console.log(convertColor(tailwind));
const amberHex = tailwind.amber as TailwindColor;
const amberColors = toColor(amberHex);
console.log(toHex(amberColors));
// console.log(stringAmber);
// console.log(amber);
