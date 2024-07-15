import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config.js";
import type { Accent, DefaultColors, Mode, Theme, ThemeInfo, Tone } from "./types.mjs";

export const makeTerminal = (mode: Mode, tone: Tone = "Neutral", accent: Accent = "Blue") => {
    const dark = mode === "Dark";
    const tw = resolveConfig(tailwindConfig).theme.colors;
    const key = {
        tone: tone.toLowerCase() as keyof DefaultColors,
        accent: accent.toLowerCase() as keyof DefaultColors,
    };

    return {
        background: dark ? tw[key.tone]["950"] : tw[key.tone]["50"],
        black: tw[key.tone][950],
        blue: tw.blue[400],
        brightBlack: tw[key.tone][800],
        brightBlue: tw.blue[400],
        brightCyan: tw.cyan[400],
        brightGreen: tw.green[400],
        brightPurple: tw.purple[400],
        brightRed: tw.red[400],
        brightWhite: tw[key.tone][50],
        brightYellow: tw.yellow[400],
        cursorColor: dark ? tw[key.tone]["50"] : tw[key.tone]["950"],
        cyan: tw.cyan[400],
        foreground: dark ? tw[key.tone]["50"] : tw[key.tone]["950"],
        green: tw.green[400],
        purple: tw.purple[400],
        red: tw.red[400],
        selectionBackground: tw[key.tone]["400"],
        white: tw[key.tone][200],
        yellow: tw.yellow[400],
    };
};

// export const makeTheme = (theme: ThemeInfo): Theme => {
//     const tailwind = resolveConfig(tailwindConfig).theme.colors;
//     const isDark = theme.mode === "Dark";
//     const terminalScale = isDark ? 500 : 700;
//     const terminalBrightScale = isDark ? 400 : 600;
//     const scale = isDark ? 300 : 700;

//     return {
//         ...theme,
//         keys: {
//             accent: theme.accent.toLowerCase() as keyof DefaultColors,
//             tone: theme.tone.toLowerCase() as keyof DefaultColors,
//         },
//         accentColor: isDark
//             ? `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][400]}`
//             : `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][600]}`,
//         background: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 900 : 100]}`,
//         background2: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 800 : 200]}`,
//         border: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 700 : 300]}`,
//         comment: tailwind.red[isDark ? 400 : 700],
//         dim: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][500]}`,
//         error: tailwind.red[scale],
//         focus: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][isDark ? 800 : 300]}4D`,
//         foreground: `${tailwind[theme.tone.toLowerCase() as keyof DefaultColors][isDark ? 300 : 700]}`,
//         hover: `${tailwind[theme.accent.toLowerCase() as keyof DefaultColors][isDark ? 800 : 300]}33`,
//         scale: scale,
//         shadow: "#00000033",
//         success: tailwind.green[scale],
//         test: tailwind.pink[scale],
//         transparent: isDark ? "#00000000" : "#FFFFFF00",
//         warning: tailwind.yellow[scale],
//         tailwind: tailwind,
//         terminal: {
//             black: tailwind.neutral[terminalScale],
//             blue: tailwind.blue[terminalScale],
//             brightBlack: tailwind.neutral[terminalBrightScale],
//             brightBlue: tailwind.blue[terminalBrightScale],
//             brightCyan: tailwind.cyan[terminalBrightScale],
//             brightGreen: tailwind.green[terminalBrightScale],
//             brightMagenta: tailwind.pink[terminalBrightScale],
//             brightRed: tailwind.red[terminalBrightScale],
//             brightWhite: tailwind.neutral[terminalBrightScale],
//             brightYellow: tailwind.yellow[terminalBrightScale],
//             cyan: tailwind.cyan[terminalScale],
//             green: tailwind.green[terminalScale],
//             magenta: tailwind.pink[terminalScale],
//             red: tailwind.red[terminalScale],
//             white: tailwind.neutral[terminalScale],
//             yellow: tailwind.yellow[terminalScale],
//         },
//     };
// };
