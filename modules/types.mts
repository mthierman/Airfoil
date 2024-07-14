import type { DefaultColors } from "tailwindcss/types/generated/colors.js";

export type Mode = "Dark" | "Light";

export type Scale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

export type Tone = "Slate" | "Gray" | "Zinc" | "Neutral" | "Stone";

export type Accent =
    | "Red"
    | "Orange"
    | "Amber"
    | "Yellow"
    | "Lime"
    | "Green"
    | "Emerald"
    | "Teal"
    | "Cyan"
    | "Sky"
    | "Blue"
    | "Indigo"
    | "Violet"
    | "Purple"
    | "Fuchsia"
    | "Pink"
    | "Rose";

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

export type { DefaultColors };
