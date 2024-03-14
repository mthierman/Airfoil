import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "tailwindcss/types/generated/colors";
import tailwindConfig from "../tailwind.config";

export interface Theme {
    name: string;
    filename: string;
    mode: string;
    accent: string;
    background: string;
    background2: string;
    border: string;
    comment: string;
    dim: string;
    focus: string;
    foreground: string;
    hover: string;
    scale: 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;
    shadow: string;
    test: string;
    transparent: string;
    tailwind: DefaultColors;
    terminal: {
        black: string;
        blue: string;
        brightBlack: string;
        brightBlue: string;
        brightCyan: string;
        brightGreen: string;
        brightMagenta: string;
        brightRed: string;
        brightWhite: string;
        brightYellow: string;
        cyan: string;
        green: string;
        magenta: string;
        red: string;
        white: string;
        yellow: string;
    };
}

export const makeTheme = (mode: string, tone: string, accent: string): Theme => {
    const tw = resolveConfig(tailwindConfig).theme.colors;
    const terminalScale = mode === "Dark" ? 500 : 700;
    const terminalBrightScale = mode === "Dark" ? 400 : 600;

    return {
        name: `Airfoil ${mode} ${tone} ${accent}`,
        filename: `airfoil-${mode.toLowerCase()}-${tone.toLowerCase()}-${accent.toLowerCase()}-color-theme.json`,
        mode: mode,
        accent: `${tw[accent.toLowerCase() as keyof DefaultColors][400]}`,
        background: `${tw[tone.toLowerCase() as keyof DefaultColors][mode === "Dark" ? 900 : 100]}`,
        background2: `${tw[tone.toLowerCase() as keyof DefaultColors][mode === "Dark" ? 800 : 200]}`,
        border: `${tw[tone.toLowerCase() as keyof DefaultColors][mode === "Dark" ? 700 : 300]}`,
        comment: tw.emerald[mode === "Dark" ? 400 : 700],
        dim: `${tw[tone.toLowerCase() as keyof DefaultColors][500]}`,
        focus: `${tw[accent.toLowerCase() as keyof DefaultColors][mode === "Dark" ? 800 : 300]}4D`,
        foreground: `${tw[tone.toLowerCase() as keyof DefaultColors][mode === "Dark" ? 300 : 700]}`,
        hover: `${tw[accent.toLowerCase() as keyof DefaultColors][mode === "Dark" ? 800 : 300]}33`,
        scale: mode === "Dark" ? 300 : 700,
        shadow: "#00000033",
        test: tw.pink[400],
        transparent: mode === "Dark" ? "#00000000" : "#FFFFFF00",
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
