import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import tailwindConfig from "../tailwind.config.js";
import type { Accent, DefaultColors, Mode, Scale, Tone } from "./types.mjs";
import { makeTailwindColors } from "./utilities.mjs";

const makeTailwind = () => {
    const tw = resolveConfig(tailwindConfig).theme.colors;
    const {
        inherit,
        current,
        transparent,
        black,
        white,
        lightBlue,
        warmGray,
        trueGray,
        coolGray,
        blueGray,
        ...colors
    } = tw;
    return colors;
};

export const makeTerminal = (mode: Mode, tone: Tone = "Neutral", accent: Accent = "Blue") => {
    const dark = mode === "Dark";
    const twHex = makeTailwind();
    const tw = makeTailwindColors(twHex);
    const key = {
        tone: tone.toLowerCase() as keyof typeof tw,
        accent: accent.toLowerCase() as keyof typeof tw,
    };

    return {
        background: dark ? tw[key.tone]["950"] : tw[key.tone]["50"],
        black: tw[key.tone][950],
        blue: tw.blue[400],
        brightBlack: tw[key.tone][800],
        brightBlue: tw.blue[400],
        brightCyan: tw.cyan[400],
        brightGreen: tw.green[400],
        brightPurple: tw.purple[400],
        brightRed: tw.red[400],
        brightWhite: tw[key.tone][50],
        brightYellow: tw.yellow[400],
        cursorColor: dark ? tw[key.tone]["50"] : tw[key.tone]["950"],
        cyan: tw.cyan[400],
        foreground: dark ? tw[key.tone]["50"] : tw[key.tone]["950"],
        green: tw.green[400],
        purple: tw.purple[400],
        red: tw.red[400],
        selectionBackground: tw[key.accent]["400"],
        white: tw[key.tone][200],
        yellow: tw.yellow[400],
    };
};

export const makeTheme = (mode: Mode, tone: Tone, accent: Accent) => {
    const twHex = makeTailwind();
    const tw = makeTailwindColors(twHex);
    const key = {
        tone: tone.toLowerCase() as keyof typeof tw,
        accent: accent.toLowerCase() as keyof typeof tw,
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
                    accentColor: tw[key.accent]["400"],
                    background: tw[key.tone]["900"],
                    background2: tw[key.tone]["800"],
                    border: tw[key.tone]["700"],
                    comment: tw.red["400"],
                    dim: tw[key.tone]["500"],
                    error: tw.red["400"],
                    focus: (() => {
                        const focus = tw[key.accent]["800"];
                        focus.alpha = 0.3;
                        return focus;
                    })(),
                    foreground: tw[key.tone]["300"],
                    hover: (() => {
                        const hover = tw[key.accent]["800"];
                        hover.alpha = 0.2;
                        return hover;
                    })(),
                    shadow: (() => {
                        const shadow = tw[key.tone]["950"];
                        shadow.alpha = 0.2;
                        return shadow;
                    })(),
                    success: tw.green[400],
                    test: tw.pink["400"],
                    transparent: new Color("sRGB", [0, 0, 0], 0),
                    warning: tw.yellow[400],
                },
                tw: tw,
                twHex: twHex,
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
                    accentColor: tw[key.accent]["600"],
                    background: tw[key.tone]["100"],
                    background2: tw[key.tone]["200"],
                    border: tw[key.tone]["300"],
                    comment: tw.red["700"],
                    dim: tw[key.tone]["500"],
                    error: tw.red["400"],
                    focus: (() => {
                        const focus = tw[key.accent]["300"];
                        focus.alpha = 0.3;
                        return focus;
                    })(),
                    foreground: tw[key.tone]["700"],
                    hover: (() => {
                        const hover = tw[key.accent]["300"];
                        hover.alpha = 0.2;
                        return hover;
                    })(),
                    shadow: (() => {
                        const shadow = tw[key.tone]["50"];
                        shadow.alpha = 0.5;
                        return shadow;
                    })(),
                    success: tw.green[400],
                    test: tw.pink["400"],
                    transparent: new Color("sRGB", [255, 255, 255], 0),
                    warning: tw.yellow[400],
                },
                tw: tw,
                twHex: twHex,
                terminal: {
                    ...terminal,
                },
            };
        }
    }
};
