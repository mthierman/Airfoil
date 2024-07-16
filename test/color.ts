import Color from "colorjs.io";
import { makeTailwind } from "../modules/themes.mjs";
import type { Scale } from "../modules/types.mts";

export const color = <T extends Record<Scale, string>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
    ) as Record<keyof T, Color>;
};

export const twToColors = <T extends Record<Scale, string>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
    ) as Record<keyof T, Color>;
};

const tw = makeTailwind();

const convert = Object.fromEntries(Object.entries(tw).map(([key, value]) => [key, color(value)]));

console.log(convert);

// const hex = <T extends Record<Scale, string>>(colors: T) => {
//     return Object.fromEntries(
//         Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
//     ) as Record<keyof T, Color>;
// };

// const colorsToHex = <T extends DefaultColors>(colors: T) => {
//     return Object.fromEntries(
//         Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
//     ) as Record<keyof T, Color>;
// };

// const convert = colorsToHex(colors);
// console.log(convert);
