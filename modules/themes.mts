import Color from "colorjs.io";
import resolveConfig from "tailwindcss/resolveConfig.js";
import type { DefaultColors } from "tailwindcss/types/generated/colors.js";
import workbenchColors from "../schema/workbench_colors.json" with { type: "json" };
import tailwindConfig from "./tailwind.config.mjs";

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

export type WorkbenchColors = Partial<Record<keyof typeof workbenchColors.properties, string>>;

export type { DefaultColors };

export const toHex = (color: Color) => {
    return color.toString({ format: "hex" });
};

export const colorsToHex = <T extends Record<string, Color>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, toHex(value)]),
    ) as Record<keyof T, string>;
};

export const transparent = (color: Color, alpha: number) => {
    const clone = color.clone();
    clone.alpha = alpha;
    return clone;
};

const tailwindStringsToColors = <T extends Record<Scale, string>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, new Color(value)]),
    ) as Record<keyof T, Color>;
};

export const makeTailwindColors = <T extends Record<string, Record<Scale, string>>>(colors: T) => {
    return Object.fromEntries(
        Object.entries(colors).map(([key, value]) => [key, tailwindStringsToColors(value)]),
    ) as Record<keyof T, Record<Scale, Color>>;
};

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

    const scale: { [key: string]: Scale } = {
        bg: dark ? "950" : "50",
        fg: dark ? "50" : "950",
        color: dark ? "400" : "600",
        brightColor: dark ? "500" : "700",
    };

    return {
        background: tw[key.tone][scale.bg],
        black: tw[key.tone]["950"],
        blue: tw.blue[scale.color],
        brightBlack: tw[key.tone]["800"],
        brightBlue: tw.blue[scale.brightColor],
        brightCyan: tw.cyan[scale.brightColor],
        brightGreen: tw.green[scale.brightColor],
        brightPurple: tw.purple[scale.brightColor],
        brightRed: tw.red[scale.brightColor],
        brightWhite: tw[key.tone]["50"],
        brightYellow: tw.yellow[scale.brightColor],
        cursorColor: tw[key.tone][scale.fg],
        cyan: tw.cyan[scale.color],
        foreground: tw[key.tone][scale.fg],
        green: tw.green[scale.color],
        purple: tw.purple[scale.color],
        red: tw.red[scale.color],
        selectionBackground: tw[key.accent]["400"],
        white: tw[key.tone]["200"],
        yellow: tw.yellow[scale.color],
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
                    focus: transparent(tw[key.accent]["800"], 0.5),
                    foreground: tw[key.tone]["300"],
                    hover: transparent(tw[key.accent]["800"], 0.4),
                    inactive: transparent(tw[key.accent]["800"], 0.3),
                    shadow: transparent(tw[key.tone]["950"], 0.2),
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
                    focus: transparent(tw[key.accent]["300"], 0.5),
                    foreground: tw[key.tone]["700"],
                    hover: transparent(tw[key.accent]["300"], 0.4),
                    inactive: transparent(tw[key.accent]["300"], 0.3),
                    shadow: transparent(tw[key.tone]["50"], 0.5),
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
