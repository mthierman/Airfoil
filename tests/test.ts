import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import { makeTheme } from "../modules/generators.mjs";
import type { DefaultColors, Theme } from "../modules/types.mjs";
import manifest from "../package.json" with { type: "json" };
import tailwindConfig from "../tailwind.config.js";

const themes = manifest.contributes.themes as Theme[];
const theme = themes[0];
console.log(makeTheme(theme));
