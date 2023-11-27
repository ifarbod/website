// iFarbod 2023

import Colors from "tailwindcss/colors";

/** @type {import('tailwindcss').Config} */
export default {
    content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
    theme: {
        extend: {
            colors: {
                primary: Colors.violet,
                secondary: Colors.neutral,
            },
        },
    },
    plugins: [],
}
