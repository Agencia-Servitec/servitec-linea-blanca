/** @type {import('tailwindcss').Config} */

const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: [
    "./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": {
          50: "#edfcfe",
          100: "#d2f3fb",
          200: "#abe8f6",
          300: "#71d5ef",
          400: "#30b9e0",
          500: "#16a8d4",
          600: "#147da6",
          700: "#176587",
          800: "#1c536e",
          900: "#1b465e",
          950: "#0c2d40",
        },
        "secondary-color": {
          50: "#eff7ff",
          100: "#deeeff",
          200: "#b6dfff",
          300: "#76c6ff",
          400: "#2daaff",
          500: "#028ff5",
          600: "#0070d2",
          700: "#0059aa",
          800: "#004e90",
          900: "#073f73",
          950: "#04284d",
        },
        "tertiary-color": {
          50: "#eff7ff",
          100: "#deefff",
          200: "#b5e1ff",
          300: "#73c9ff",
          400: "#28adff",
          500: "#0093fb",
          600: "#0073d7",
          700: "#005cae",
          800: "#004e8f",
          900: "#044176",
          950: "#032d57",
        },
        "quaternary-color": {
          50: "#f2f4fc",
          100: "#e2e8f7",
          200: "#ccd6f1",
          300: "#a9bce7",
          400: "#8099da",
          500: "#6279cf",
          600: "#4e5fc2",
          700: "#444eb1",
          800: "#3d4393",
          900: "#343a74",
          950: "#242647",
        },
      },
      width: {
        98: "26rem",
        100: "30rem",
      },
      height: {
        98: "26rem",
        100: "30rem",
      }
    },
  },
  plugins: [require("flowbite/plugin")]
};
