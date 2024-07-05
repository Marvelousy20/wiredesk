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
        black: "#232529",
        blackInactive: "#686662",
      },
      boxShadow: {
        bottom: "0 2px 2px -1px rgba(0, 0, 0, 0.1)",
        sides: "0px 4px 4px 0px #0000000D",
      },

      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      keyframes: {
        slideIn: {
          "0%": { width: "5%" },
          "100%": { width: "20%" },
        },
        slideOut: {
          "0%": { width: "20%" },
          "100%": { width: "5%" },
        },
      },
      animation: {
        slideIn: "slideIn 0.5s ease-in-out forwards",
        slideOut: "slideOut 0.5s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
export default config;
