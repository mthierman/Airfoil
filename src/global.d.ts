import type { DefaultColors } from "tailwindcss/types/generated/colors";
import { Mode } from "./themes/tailwind";

export declare global {
    interface Theme {
        name: string;
        mode: Mode;
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

    interface Terminal {
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
}
