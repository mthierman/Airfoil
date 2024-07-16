import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "tailwindcss/types/generated/colors.js";
import { makeTheme } from "../modules/themes.mjs";
import tailwindConfig from "../tailwind.config.js";

const tailwind = resolveConfig(tailwindConfig).theme.colors;
const key = "Slate".toLowerCase() as keyof DefaultColors;
console.log(tailwind[key]);

const theme = makeTheme("Dark", "Neutral", "Blue");
console.log(theme);
