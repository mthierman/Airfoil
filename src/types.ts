import type { DefaultColors } from "tailwindcss/types/generated/colors";

type Mode = "Dark" | "Light";

type Scale = 50 | 100 | 200 | 300 | 400 | 500 | 600 | 700 | 800 | 900 | 950;

interface Theme {
    name: string;
    filename: string;
    mode: Mode;
    keys: {
        accent: keyof DefaultColors;
        tone: keyof DefaultColors;
    };
    accent: string;
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

type ThemeManifest = {
    label: string;
    mode: Mode;
    tone: "Slate" | "Gray" | "Zinc" | "Neutral" | "Stone";
    accent:
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
    uiTheme: "vs-dark" | "vs";
    path: string;
};

export { DefaultColors, Mode, Scale, Theme, ThemeManifest };
