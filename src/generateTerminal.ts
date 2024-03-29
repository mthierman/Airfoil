import type { Theme } from "./types";

export default (theme: Theme) => {
    return {
        background: theme.background.toUpperCase(),
        black: theme.terminal.black.toUpperCase(),
        blue: theme.terminal.blue.toUpperCase(),
        brightBlack: theme.terminal.brightBlack.toUpperCase(),
        brightBlue: theme.terminal.brightBlue.toUpperCase(),
        brightCyan: theme.terminal.brightCyan.toUpperCase(),
        brightGreen: theme.terminal.brightGreen.toUpperCase(),
        brightPurple: theme.terminal.brightMagenta.toUpperCase(),
        brightRed: theme.terminal.brightRed.toUpperCase(),
        brightWhite: theme.terminal.brightWhite.toUpperCase(),
        brightYellow: theme.terminal.brightYellow.toUpperCase(),
        cursorColor: theme.accent.toUpperCase(),
        cyan: theme.terminal.cyan.toUpperCase(),
        foreground: theme.foreground.toUpperCase(),
        green: theme.terminal.green.toUpperCase(),
        name: theme.name,
        purple: theme.terminal.magenta.toUpperCase(),
        red: theme.terminal.red.toUpperCase(),
        selectionBackground: theme.accent.toUpperCase(),
        white: theme.terminal.white.toUpperCase(),
        yellow: theme.terminal.yellow.toUpperCase(),
    };
};
