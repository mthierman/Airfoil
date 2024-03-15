import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config";
import type { DefaultColors, Mode, Theme, ThemeManifest } from "./types";

export default (theme: ThemeManifest): Theme => {
    const tw = resolveConfig(tailwindConfig).theme.colors;
    const terminalScale = theme.mode === "Dark" ? 500 : 700;
    const terminalBrightScale = theme.mode === "Dark" ? 400 : 600;

    return {
        name: `${theme.label}`,
        filename: `airfoil-${theme.mode.toLowerCase()}-${theme.tone.toLowerCase()}-${theme.accent.toLowerCase()}-color-theme.json`,
        mode: theme.mode,
        keys: {
            accent: theme.accent.toLowerCase() as keyof DefaultColors,
            tone: theme.tone.toLowerCase() as keyof DefaultColors,
        },
        accent: `${tw[theme.accent.toLowerCase() as keyof DefaultColors][400]}`,
        background: `${tw[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 900 : 100]}`,
        background2: `${tw[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 800 : 200]}`,
        border: `${tw[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 700 : 300]}`,
        comment: tw.emerald[theme.mode === "Dark" ? 400 : 700],
        dim: `${tw[theme.tone.toLowerCase() as keyof DefaultColors][500]}`,
        error: tw.red[400],
        focus: `${tw[theme.accent.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 800 : 300]}4D`,
        foreground: `${tw[theme.tone.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 300 : 700]}`,
        hover: `${tw[theme.accent.toLowerCase() as keyof DefaultColors][theme.mode === "Dark" ? 800 : 300]}33`,
        scale: theme.mode === "Dark" ? 300 : 700,
        shadow: "#00000033",
        success: tw.green[400],
        test: tw.pink[400],
        transparent: theme.mode === "Dark" ? "#00000000" : "#FFFFFF00",
        tailwind: tw,
        terminal: {
            black: tw.neutral[terminalScale],
            blue: tw.blue[terminalScale],
            brightBlack: tw.neutral[terminalBrightScale],
            brightBlue: tw.blue[terminalBrightScale],
            brightCyan: tw.cyan[terminalBrightScale],
            brightGreen: tw.green[terminalBrightScale],
            brightMagenta: tw.pink[terminalBrightScale],
            brightRed: tw.red[terminalBrightScale],
            brightWhite: tw.neutral[terminalBrightScale],
            brightYellow: tw.yellow[terminalBrightScale],
            cyan: tw.cyan[terminalScale],
            green: tw.green[terminalScale],
            magenta: tw.pink[terminalScale],
            red: tw.red[terminalScale],
            white: tw.neutral[terminalScale],
            yellow: tw.yellow[terminalScale],
        },
    };
};
