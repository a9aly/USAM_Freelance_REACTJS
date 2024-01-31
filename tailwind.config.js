/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-color": "#6DAD04",
        "pri-color": "#e2efcd",
        "jobs-number-color": "#FDC0AE",
        "gradient-0-color": "#FAFAF9",
        "gradient-1-color": "#BAC9A3",
        "gradient-2-color": "#97CE3C",
      },
    },
  },
  plugins: [],
};
