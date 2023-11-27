// iFarbod 2023

import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import tailwind from "@astrojs/tailwind";
import path from "path";
import { fileURLToPath } from "url";

import { defineConfig } from "astro/config";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
    site: "https://ifarbod.ir",
    trailingSlash: "never",
    integrations: [
        tailwind({
            applyBaseStyles: false
        }),
        sitemap(),
        mdx()
    ],
    vite: {
        resolve: {
            alias: {
                "~": path.resolve(__dirname, "./src"),
            },
        }
    }
});
