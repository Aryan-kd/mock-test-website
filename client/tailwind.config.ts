import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        primary: "#48bf84",
        secondary: "#eff2f7",
        info: "#00b8d9",
        success: "#36b37e",
        danger: "#ff5630",
        warning: "#ffab00",
        light: "#eff2f7",
        dark: "#273444",
        white: "#fff",
      },
    },
  },
  plugins: [],
};
export default config;
