import Color from "colorjs.io";
import type { Scale } from "./types.mjs";

export const toHex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export const colorsToHex = <T extends Record<string, Color>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, toHex(value)]),
    ) as Record<keyof T, string>;
};

export const transparent = (color: Color, alpha: number) => {
    const clone = color.clone();
    clone.alpha = alpha;
    return clone;
};

const tailwindStringsToColors = <T extends Record<Scale, string>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
    ) as Record<keyof T, Color>;
};

export const makeTailwindColors = <T extends Record<string, Record<Scale, string>>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, tailwindStringsToColors(value)]),
    ) as Record<keyof T, Record<Scale, Color>>;
};
