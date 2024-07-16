import Color from "colorjs.io";
import type { Scale } from "./types.mjs";

export const hex = <T extends Record<string, Color>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, value.toString({ format: "hex" })]),
    ) as Record<keyof T, string>;
};

export const glass = (color: Color, alpha: number) => {
    const clone = new Color(color);
    clone.alpha = 1;
    return clone;
};

const twHexToColor = <T extends Record<Scale, string>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
    ) as Record<keyof T, Color>;
};

export const makeTailwindColors = <T extends Record<string, Record<Scale, string>>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, twHexToColor(value)]),
    ) as Record<keyof T, Record<Scale, Color>>;
};
