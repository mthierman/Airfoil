import type { DefaultColors } from "tailwindcss/types/generated/colors.js";

export const modes = ["Light", "Dark"] as const;

export type Mode = (typeof modes)[number];

export const scales = [
    "50",
    "100",
    "200",
    "300",
    "400",
    "500",
    "600",
    "700",
    "800",
    "900",
    "950",
] as const;

export type Scale = (typeof scales)[number];

export const tones = ["Slate", "Gray", "Zinc", "Neutral", "Stone"] as const;

export type Tone = (typeof tones)[number];

export const accents = [
    "Red",
    "Orange",
    "Amber",
    "Yellow",
    "Lime",
    "Green",
    "Emerald",
    "Teal",
    "Cyan",
    "Sky",
    "Blue",
    "Indigo",
    "Violet",
    "Purple",
    "Fuchsia",
    "Pink",
    "Rose",
] as const;

export type Accent = (typeof accents)[number];

export type Tailwind = Omit<
    DefaultColors,
    "inherit" | "current" | "transparent" | "black" | "white"
> & {
    transparent?: string;
};

export type ThemeInfo = {
    label: string;
    mode: Mode;
    tone: Tone;
    accent: Accent;
    uiTheme: "vs-dark" | "vs";
    path: string;
};

export interface Theme extends ThemeInfo {
    keys: {
        accent: keyof DefaultColors;
        tone: keyof DefaultColors;
    };
    accentColor: string;
    background: string;
    background2: string;
    border: string;
    comment: string;
    dim: string;
    error: string;
    focus: string;
    foreground: string;
    hover: string;
    scale: Scale;
    shadow: string;
    success: string;
    test: string;
    transparent: string;
    warning: string;
    tailwind: DefaultColors;
    terminal: {
        background?: string;
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
        cursor?: string;
        cyan: string;
        foreground?: string;
        green: string;
        magenta: string;
        red: string;
        selectionBackground?: string;
        white: string;
        yellow: string;
    };
}

export type { DefaultColors };
