import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config";

export default resolveConfig(tailwindConfig).theme.colors;
