import type { DefaultColors } from "tailwindcss/types/generated/colors.js";
import workbenchColors from "../schema/workbench_colors.json" with { type: "json" };

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
