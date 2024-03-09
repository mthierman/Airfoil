import type { DefaultColors } from "tailwindcss/types/generated/colors";
import { Mode } from "./generateTheme";
import { default as tw } from "./tailwindConfig";
import terminalColors from "./terminalColors";

export default (mode: Mode, tone: string, accent: string): Theme => {
    switch (mode) {
        case Mode.Dark:
            return {
                name: `Airfoil ${Mode[mode]} ${tone[0].toUpperCase() + tone.slice(1)} ${accent[0].toUpperCase() + accent.slice(1)}`,
                filename: `airfoil-${Mode[mode][0].toLowerCase() + Mode[mode].slice(1)}-${tone}-${accent}-color-theme.json`,
                mode: Mode.Dark,
                accent: `${tw[accent as keyof DefaultColors][400]}`,
                background: `${tw[tone as keyof DefaultColors][900]}`,
                background2: `${tw[tone as keyof DefaultColors][800]}`,
                border: `${tw[tone as keyof DefaultColors][700]}`,
                comment: tw.emerald[400],
                dim: `${tw[tone as keyof DefaultColors][500]}`,
                focus: `${tw[accent as keyof DefaultColors][800]}4D`,
                foreground: `${tw[tone as keyof DefaultColors][300]}`,
                hover: `${tw[accent as keyof DefaultColors][800]}33`,
                scale: 300,
                shadow: "#00000033",
                transparent: "#00000000",
                terminal: terminalColors(Mode.Dark),
            };
        case Mode.Light:
            return {
                name: `Airfoil ${Mode[mode]} ${tone[0].toUpperCase() + tone.slice(1)} ${accent[0].toUpperCase() + accent.slice(1)}`,
                filename: `airfoil-${Mode[mode][0].toLowerCase() + Mode[mode].slice(1)}-${tone}-${accent}-color-theme.json`,
                mode: Mode.Light,
                accent: `${tw[accent as keyof DefaultColors][400]}`,
                background: `${tw[tone as keyof DefaultColors][100]}`,
                background2: `${tw[tone as keyof DefaultColors][200]}`,
                border: `${tw[tone as keyof DefaultColors][300]}`,
                comment: tw.emerald[700],
                dim: `${tw[tone as keyof DefaultColors][500]}`,
                focus: `${tw[accent as keyof DefaultColors][300]}4D`,
                foreground: `${tw[tone as keyof DefaultColors][700]}`,
                hover: `${tw[accent as keyof DefaultColors][300]}33`,
                scale: 700,
                shadow: "#00000033",
                transparent: "#FFFFFF00",
                terminal: terminalColors(Mode.Light),
            };
    }
};
