import type { Config } from "tailwindcss";
// import dsfsd from "./images/Rectangle 24299.svg"
// import gf from "./images/image (9).png"
// import ifghf from "./images/Group 37261.png"

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      transitionProperty: {
        height: "height",
      },
      fontFamily: {
        urbanist: "var(--font-urbanist)",
      },
      padding: {
        body: "3.5%",
      },
      fontSize: {
        small: "15px",
      },
      colors: {
        primary: "#39B54A",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "footer-image": "url('../images/Rectangle 24299.svg')",
        "questions-image": "url('../images/image (9).png')",
        "timer-image": "url('../images/Group 37261.png')",
      },
    },
    screens: {
      sm: "480px",
      md: "768px",
      lg: "976px",
      xl: "1280px",
      "2xl": "1440px",
      "3xl": "1536px",
    },
  },
  plugins: [require("tailwind-scrollbar")],
};
export default config;
