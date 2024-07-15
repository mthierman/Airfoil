import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config.js";
import type { DefaultColors, Mode, Theme, ThemeInfo } from "./types.mjs";

export const makeTerminal = (mode: Mode) => {
    const tailwind = resolveConfig(tailwindConfig).theme.colors;

    return {
        // background: ui.main_background,
        black: tailwind.neutral[950],
        blue: tailwind.blue[400],
        brightBlack: tailwind.neutral[800],
        brightBlue: tailwind.blue[400],
        brightCyan: tailwind.cyan[400],
        brightGreen: tailwind.green[400],
        brightPurple: tailwind.purple[400],
        brightRed: tailwind.red[400],
        brightWhite: tailwind.neutral[50],
        brightYellow: tailwind.yellow[400],
        // cursorColor: ui.primary_text,
        cyan: tailwind.cyan[400],
        // foreground: ui.primary_text,
        green: tailwind.green[400],
        purple: tailwind.purple[400],
        red: tailwind.red[400],
        // selectionBackground: ui.active_borders,
        white: tailwind.neutral[200],
        yellow: tailwind.yellow[400],
    };
};

export const makeTheme = (theme: ThemeInfo): Theme => {
    const tailwind = resolveConfig(tailwindConfig).theme.colors;
    const isDark = theme.mode === "Dark";
    const terminalScale = isDark ? 500 : 700;
    const terminalBrightScale = isDark ? 400 : 600;
    const scale = isDark ? 300 : 700;

    return {
        ...theme,
        keys: {
            accent: theme.accent.toLowerCase() as keyof DefaultColors,
            tone: theme.tone.toLowerCase() as keyof DefaultColors,
        },
        accentColor: isDark
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
