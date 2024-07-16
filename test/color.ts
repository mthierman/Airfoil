import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "tailwindcss/types/generated/colors.js";
import tailwindConfig from "../tailwind.config.js";

const makeTailwind = () => {
    const tw = resolveConfig(tailwindConfig).theme.colors;
    const {
        inherit,
        current,
        transparent,
        black,
        white,
        lightBlue,
        warmGray,
        trueGray,
        coolGray,
        blueGray,
        ...colors
    } = tw;
    return colors;
};

const tw = makeTailwind();
console.log(tw.red);

// const scales = [
//     "50",
//     "100",
//     "200",
//     "300",
//     "400",
//     "500",
//     "600",
//     "700",
//     "800",
//     "900",
//     "950",
// ] as const;

// type Scale = (typeof scales)[number];

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
