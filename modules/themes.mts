import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config.js";
import type { Accent, DefaultColors, Mode, Scale, Tone } from "./types.mjs";

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

export const makeTheme = (mode: Mode, tone: Tone, accent: Accent) => {
    const tw = resolveConfig(tailwindConfig).theme.colors;
    const key = {
        tone: tone.toLowerCase() as keyof DefaultColors,
        accent: accent.toLowerCase() as keyof DefaultColors,
    };

    const terminal = makeTerminal(mode, tone, accent);

    switch (mode) {
        case "Dark": {
            return {
                key: {
                    ...key,
                    scale: "300" as Scale,
                },
                theme: {
                    accentColor: new Color(tw[key.accent]["400"]),
                    background: new Color(tw[key.tone]["900"]),
                    background2: new Color(tw[key.tone]["800"]),
                    border: new Color(tw[key.tone]["700"]),
                    comment: new Color(tw.red["400"]),
                    dim: new Color(tw[key.tone]["500"]),
                    error: new Color(tw.red["400"]),
                    focus: new Color(tw[key.accent]["800"].concat("4D")),
                    foreground: new Color(tw[key.tone]["300"]),
                    hover: new Color(tw[key.accent]["800"].concat("33")),
                    shadow: new Color(tw[key.tone]["950"].concat("33")),
                    success: new Color(tw.green[400]),
                    test: new Color(tw.pink["400"]),
                    transparent: new Color("sRGB", [0, 0, 0], 0),
                    warning: new Color(tw.yellow[400]),
                },
                tw: tw,
                terminal: {
                    ...terminal,
                },
            };
        }
        case "Light": {
            return {
                key: {
                    ...key,
                    scale: "700" as Scale,
                },
                theme: {
                    accentColor: new Color(tw[key.accent]["600"]),
                    background: new Color(tw[key.tone]["100"]),
                    background2: new Color(tw[key.tone]["200"]),
                    border: new Color(tw[key.tone]["300"]),
                    comment: new Color(tw.red["700"]),
                    dim: new Color(tw[key.tone]["500"]),
                    error: new Color(tw.red["400"]),
                    focus: new Color(tw[key.accent]["300"]),
                    foreground: new Color(tw[key.tone]["700"]),
                    hover: new Color(tw[key.accent]["300"].concat("33")),
                    shadow: new Color(tw[key.tone]["50"].concat("80")),
                    success: new Color(tw.green[400]),
                    test: new Color(tw.pink["400"]),
                    transparent: new Color("sRGB", [255, 255, 255], 0),
                    warning: new Color(tw.yellow[400]),
                },
                tw: tw,
                terminal: {
                    ...terminal,
                },
            };
        }
    }
};
