import { Mode, Terminal } from "./global";
import { default as tw } from "./tailwindConfig";

export default (mode: Mode): Terminal => {
    switch (mode) {
        case Mode.Dark:
            return {
                black: tw.neutral[500],
                blue: tw.blue[500],
                brightBlack: tw.neutral[400],
                brightBlue: tw.blue[400],
                brightCyan: tw.cyan[400],
                brightGreen: tw.green[400],
                brightMagenta: tw.pink[400],
                brightRed: tw.red[400],
                brightWhite: tw.neutral[400],
                brightYellow: tw.yellow[400],
                cyan: tw.cyan[500],
                green: tw.green[500],
                magenta: tw.pink[500],
                red: tw.red[500],
                white: tw.neutral[500],
                yellow: tw.yellow[500],
            };
        case Mode.Light:
            return {
                black: tw.neutral[700],
                blue: tw.blue[700],
                brightBlack: tw.neutral[600],
                brightBlue: tw.blue[600],
                brightCyan: tw.cyan[600],
                brightGreen: tw.green[600],
                brightMagenta: tw.pink[600],
                brightRed: tw.red[600],
                brightWhite: tw.neutral[600],
                brightYellow: tw.yellow[600],
                cyan: tw.cyan[700],
                green: tw.green[700],
                magenta: tw.pink[700],
                red: tw.red[700],
                white: tw.neutral[700],
                yellow: tw.yellow[700],
            };
    }
};
