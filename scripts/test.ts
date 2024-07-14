import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors, Theme, ThemeInfo } from "../modules/types.mjs";
import tailwindConfig from "../tailwind.config.js";

function convertColor(colors: Record<string, Color | string>, format: "hex" | "Color") {
    Object.entries(colors).forEach(([key, value]: [string, Color | string]) => {
        switch (format) {
            case "hex":
                {
                    colors[key] = value.toString({ format: "hex" });
                }
                break;
            case "Color":
                {
                    colors[key] = new Color(value);
                }
                break;
        }
    });
    return colors;
}

type Colors = Omit<DefaultColors, "inherit" | "current" | "transparent" | "black" | "white">;
type Tailwind = Colors & { transparent?: "#00000000" };

const { inherit, current, transparent, black, white, ...colors } =
    resolveConfig(tailwindConfig).theme.colors;
const tailwind: Tailwind = { ...colors };

console.log(convertColor(tailwind.amber, "Color"));
