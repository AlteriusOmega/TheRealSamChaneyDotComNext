import type { Config } from "tailwindcss";
// const colors = require("tailwindcss/colors");

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      serifCrimson: ["var(--font-crimson-text)", "sans-serif"],
      gradientFont: ["Times New Roman", "serif"],
    },
    extend: {
      colors: {
        darkPrimary: "var(--dark-primary)",
        darkSecondary: "var(--dark-secondary)",
        darkTextPrimary: "var(--dark-text-primary)",
        darkTextSecondary: "var(--dark-text-secondary)",
        darkBackgroundPrimary: "var(--dark-background-primary)",
        darkBackgroundSecondary: "var(--dark-background-secondary)"
      },
      fontSize: {
        gradientDivider: "2.5rem",
      },
    }
  },
  plugins: [require("tailwind-scrollbar-hide")],
};
export default config;
