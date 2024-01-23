/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "button-color": "#6DAD04",
        "pri-color": "#e2efcd",
        "jobs-number-color":'#FDC0AE'
      },
    },
  },
  plugins: [],
};
