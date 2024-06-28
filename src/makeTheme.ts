import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config";
import type { DefaultColors, Mode, Theme, ThemeManifest } from "./types";

export default (theme: ThemeManifest): Theme => {
    const tailwind = resolveConfig(tailwindConfig).theme.colors;
    const isDark = theme.mode === "Dark";
    const terminalScale = isDark ? 500 : 700;
    const terminalBrightScale = isDark ? 400 : 600;
    const scale = isDark ? 300 : 700;

    return {
        name: theme.label,
        filename: `airfoil-${theme.mode.toLowerCase()}-${theme.tone.toLowerCase()}-${theme.accent.toLowerCase()}-color-theme.json`,
        mode: theme.mode,
        keys: {
            accent: theme.accent.toLowerCase() as keyof DefaultColors,
            tone: theme.tone.toLowerCase() as keyof DefaultColors,
        },
        accent: isDark
            ? `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][400]}`
            : `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][600]}`,
        background: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 900 : 100]}`,
        background2: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 800 : 200]}`,
        border: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 700 : 300]}`,
        comment: tailwind.red[isDark ? 400 : 700],
        dim: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][500]}`,
        error: tailwind.red[scale],
        focus: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][isDark ? 800 : 300]}4D`,
        foreground: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 300 : 700]}`,
        hover: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][isDark ? 800 : 300]}33`,
        scale: scale,
        shadow: "#00000033",
        success: tailwind.green[scale],
        test: tailwind.pink[scale],
        transparent: isDark ? "#00000000" : "#FFFFFF00",
        warning: tailwind.yellow[scale],
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
