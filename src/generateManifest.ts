import { mkdir, writeFile } from "node:fs/promises";
import { dirname, resolve } from "node:path";

import manifest from "../package.json" with { type: "json" };

const modes = ["Light", "Dark"];
const tones = ["Slate", "Gray", "Zinc", "Neutral", "Stone"];
const accents = [
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
];

const generateManifest = () => {
    const themes: unknown[] = [];

    const generateThemesArray = () => {
        for (const mode of modes) {
            for (const tone of tones) {
                for (const accent of accents) {
                    themes.push({
                        label: `Airfoil ${mode} ${tone} ${accent}`,
                        mode: `${mode}`,
                        tone: `${tone}`,
                        accent: `${accent}`,
                        uiTheme: mode === "Light" ? "vs" : "vs-dark",
                        path: `./themes/airfoil-${mode.toLowerCase()}-${tone.toLowerCase()}-${accent.toLowerCase()}-color-theme.json`,
                    });
                }
            }
        }
    };

    generateThemesArray();

    return {
        name: "theme-airfoil",
        version: "0.0.1",
        private: true,
        type: "module",
        publisher: "mthierman",
        engines: {
            vscode: "*",
        },
        license: "MIT",
        displayName: "Airfoil Theme",
        description: "Airfoil light & dark themes",
        categories: ["Themes"],
        keywords: ["theme", "airfoil", "dark", "light"],
        galleryBanner: {
            color: "#000000",
            theme: "dark",
        },
        contributes: {
            themes: [...themes],
        },
        icon: "data/icon.png",
        homepage: "https://github.com/mthierman/Airfoil/blob/main/README.md",
        bugs: {
            email: "mthierman@gmail.com",
            url: "https://github.com/mthierman/Airfoil/issues",
        },
        repository: {
            type: "git",
            url: "https://github.com/mthierman/Airfoil.git",
        },
        scripts: {
            check: "tsc",
            dev: "esbuild scripts/dev.ts --bundle --outdir=build --platform=node --format=esm --packages=external && node build/dev.js",
            build: "tsc && esbuild scripts/build.ts --bundle --outdir=build --platform=node --format=esm --packages=external && node build/build.js",
            vsce: "vsce publish",
        },
        devDependencies: {
            ...manifest.devDependencies,
        },
    };
};

const generate = async () => {
    const root = resolve(dirname(import.meta.dirname));
    await mkdir(root, { recursive: true });
    writeFile(resolve(root, "package.json"), JSON.stringify(generateManifest(), null, 4));
};

generate();
