/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: 'hsl(var(--color-background) / <alpha-value>)',
        listBg: 'hsl(var(--color-listBackground) / <alpha-value>)',
        active: 'hsl(var(--color-active) / <alpha-value>)',
        hover: 'hsl(var(--color-hover) / <alpha-value>)',
        content: 'hsl(var(--color-content) / <alpha-value>)',
        darkBlue: 'hsl(var(--color-darkBlue) / <alpha-value>)',
      }
    },
  },
  plugins: [],
}