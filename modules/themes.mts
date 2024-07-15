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
        background: dark ? new Color(tw[key.tone]["950"]) : new Color(tw[key.tone]["50"]),
        black: new Color(tw[key.tone][950]),
        blue: new Color(tw.blue[400]),
        brightBlack: new Color(tw[key.tone][800]),
        brightBlue: new Color(tw.blue[400]),
        brightCyan: new Color(tw.cyan[400]),
        brightGreen: new Color(tw.green[400]),
        brightPurple: new Color(tw.purple[400]),
        brightRed: new Color(tw.red[400]),
        brightWhite: new Color(tw[key.tone][50]),
        brightYellow: new Color(tw.yellow[400]),
        cursorColor: dark ? new Color(tw[key.tone]["50"]) : new Color(tw[key.tone]["950"]),
        cyan: new Color(tw.cyan[400]),
        foreground: dark ? new Color(tw[key.tone]["50"]) : new Color(tw[key.tone]["950"]),
        green: new Color(tw.green[400]),
        purple: new Color(tw.purple[400]),
        red: new Color(tw.red[400]),
        selectionBackground: new Color(tw[key.accent]["400"]),
        white: new Color(tw[key.tone][200]),
        yellow: new Color(tw.yellow[400]),
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
