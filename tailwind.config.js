/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        text: "hsl(var(--text))",
        input: "hsl(var(--input))",
        background: "hsl(var(--background))",
        elements: "hsl(var(--elements))",
      },
      fontFamily: {
        nunito: ["nunito", "sans-serif"],
      },
    },
  },
  plugins: [],
};
