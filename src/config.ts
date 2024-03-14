import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "tailwindcss/types/generated/colors";
import tailwindConfig from "../tailwind.config";

export const tailwindColors = () => {
    return resolveConfig(tailwindConfig).theme.colors;
};

export enum Mode {
    Dark,
    Light,
}

export interface Theme {
    name: string;
    filename: string;
    mode: Mode;
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
    transparent: string;
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

export const getTheme = (mode: Mode, tone: string, accent: string): Theme => {
    const tw = tailwindColors();
    const terminalScale = mode === Mode.Dark ? 500 : 700;
    const terminalBrightScale = mode === Mode.Dark ? 400 : 600;

    return {
        name: `Airfoil ${Mode[mode]} ${tone[0].toUpperCase() + tone.slice(1)} ${accent[0].toUpperCase() + accent.slice(1)}`,
        filename: `airfoil-${Mode[mode][0].toLowerCase() + Mode[mode].slice(1)}-${tone}-${accent}-color-theme.json`,
        mode: Mode.Dark,
        accent: `${tw[accent as keyof DefaultColors][400]}`,
        background: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 900 : 100]}`,
        background2: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 800 : 200]}`,
        border: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 700 : 300]}`,
        comment: tw.emerald[mode === Mode.Dark ? 400 : 700],
        dim: `${tw[tone as keyof DefaultColors][500]}`,
        focus: `${tw[accent as keyof DefaultColors][mode === Mode.Dark ? 800 : 300]}4D`,
        foreground: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 300 : 700]}`,
        hover: `${tw[accent as keyof DefaultColors][mode === Mode.Dark ? 800 : 300]}33`,
        scale: mode === Mode.Dark ? 300 : 700,
        shadow: "#00000033",
        transparent: mode === Mode.Dark ? "#00000000" : "#FFFFFF00",
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
