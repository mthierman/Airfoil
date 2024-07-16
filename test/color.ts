import Color from "colorjs.io";
import { makeTailwind } from "../modules/themes.mjs";
import type { Scale } from "../modules/types.mts";

const color = <T extends Record<Scale, string>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
    ) as Record<keyof T, Color>;
};

const convert = <T extends Record<string, Record<Scale, string>>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, color(value)]),
    ) as Record<keyof T, Record<Scale, Color>>;
};

const tw = makeTailwind();
const converted = convert(tw);
