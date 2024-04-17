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
      serif: ["Crimson Text", "serif"],
    },
    colors: {
      darkPrimary: "var(--dark-primary)",
      darkSecondary: "var(--dark-secondary)",
      darkTextPrimary: "var(--dark-text-primary)",
      darkTextSecondary: "var(--dark-text-secondary)",
      darkBackgroundPrimary: "var(--dark-background-primary)",
      darkBackgroundSecondary: "var(--dark-background-secondary)"
    },
    extend: {
      fontSize: {
        gradientDivider: "2rem",
      },
    }
  },
  plugins: [],
};
export default config;
