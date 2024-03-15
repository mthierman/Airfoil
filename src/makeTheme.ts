import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config";
import type { DefaultColors, Mode, Theme, ThemeManifest } from "./types";

export default (theme: ThemeManifest): Theme => {
    const tailwind = resolveConfig(tailwindConfig).theme.colors;
    const terminalScale = theme.mode === "Dark" ? 500 : 700;
    const terminalBrightScale = theme.mode === "Dark" ? 400 : 600;

    return {
        name: theme.label,
        filename: `airfoil-${theme.mode.toLowerCase()}-${theme.tone.toLowerCase()}-${theme.accent.toLowerCase()}-color-theme.json`,
        mode: theme.mode,
        keys: {
            accent: theme.accent.toLowerCase() as keyof DefaultColors,
            tone: theme.tone.toLowerCase() as keyof DefaultColors,
        },
        accent: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][400]}`,
        background: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 900 : 100]}`,
        background2: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 800 : 200]}`,
        border: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 700 : 300]}`,
        comment: tailwind.emerald[theme.mode === "Dark" ? 400 : 700],
        dim: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][500]}`,
        error: tailwind.red[400],
        focus: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 800 : 300]}4D`,
        foreground: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 300 : 700]}`,
        hover: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 800 : 300]}33`,
        scale: theme.mode === "Dark" ? 300 : 700,
        shadow: "#00000033",
        success: tailwind.green[400],
        test: tailwind.pink[400],
        transparent: theme.mode === "Dark" ? "#00000000" : "#FFFFFF00",
        warning: tailwind.yellow[400],
        tailwind: tailwind,
        terminal: {
            black: tailwind.neutral[terminalScale],
            blue: tailwind.blue[terminalScale],
            brightBlack: tailwind.neutral[terminalBrightScale],
            brightBlue: tailwind.blue[terminalBrightScale],
            brightCyan: tailwind.cyan[terminalBrightScale],
            brightGreen: tailwind.green[terminalBrightScale],
            brightMagenta: tailwind.pink[terminalBrightScale],
            brightRed: tailwind.red[terminalBrightScale],
            brightWhite: tailwind.neutral[terminalBrightScale],
            brightYellow: tailwind.yellow[terminalBrightScale],
            cyan: tailwind.cyan[terminalScale],
            green: tailwind.green[terminalScale],
            magenta: tailwind.pink[terminalScale],
            red: tailwind.red[terminalScale],
            white: tailwind.neutral[terminalScale],
            yellow: tailwind.yellow[terminalScale],
        },
    };
};
