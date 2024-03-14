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
    terminal: Terminal;
}

export interface Terminal {
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
}

export const getTerminal = (mode: Mode) => {
    const tw = tailwindColors();
    const scale = mode === Mode.Dark ? 500 : 700;
    const brightScale = mode === Mode.Dark ? 400 : 400;

    return {
        black: tw.neutral[scale],
        blue: tw.blue[scale],
        brightBlack: tw.neutral[brightScale],
        brightBlue: tw.blue[brightScale],
        brightCyan: tw.cyan[brightScale],
        brightGreen: tw.green[brightScale],
        brightMagenta: tw.pink[brightScale],
        brightRed: tw.red[brightScale],
        brightWhite: tw.neutral[brightScale],
        brightYellow: tw.yellow[brightScale],
        cyan: tw.cyan[scale],
        green: tw.green[scale],
        magenta: tw.pink[scale],
        red: tw.red[scale],
        white: tw.neutral[scale],
        yellow: tw.yellow[scale],
    };
};

export const getTheme = (mode: Mode, tone: string, accent: string): Theme => {
    const tw = tailwindColors();

    return {
        name: `Airfoil ${Mode[mode]} ${tone[0].toUpperCase() + tone.slice(1)} ${accent[0].toUpperCase() + accent.slice(1)}`,
        filename: `airfoil-${Mode[mode][0].toLowerCase() + Mode[mode].slice(1)}-${tone}-${accent}-color-theme.json`,
        mode: Mode.Dark,
        accent: `${tw[accent as keyof DefaultColors][400]}`,
        background: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 900 : 100]}`,
        background2: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 800 : 200]}`,
        border: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 700 : 300]}`,
        comment: tw.emerald[400],
        dim: `${tw[tone as keyof DefaultColors][500]}`,
        focus: `${tw[accent as keyof DefaultColors][mode === Mode.Dark ? 800 : 300]}4D`,
        foreground: `${tw[tone as keyof DefaultColors][mode === Mode.Dark ? 300 : 700]}`,
        hover: `${tw[accent as keyof DefaultColors][mode === Mode.Dark ? 800 : 300]}33`,
        scale: mode === Mode.Dark ? 300 : 700,
        shadow: "#00000033",
        transparent: mode === Mode.Dark ? "#00000000" : "#FFFFFF00",
        terminal: getTerminal(mode),
    };
};
