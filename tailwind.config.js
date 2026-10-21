/** @type {import('tailwindcss').Config} */
const token = (name) => `rgb(var(--${name}) / <alpha-value>)`

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: token("bg"),
        surface: token("surface"),
        fg: token("fg"),
        muted: token("muted"),
        line: token("line"),
        accent: token("accent"),
      },
      fontFamily: {
        // Self-hosted via Fontsource (imported in src/main.tsx); system fonts are the fallback.
        sans: ['"Geist Variable"', "ui-sans-serif", "system-ui", "-apple-system", "Segoe UI", "Roboto", "sans-serif"],
        mono: ['"Geist Mono Variable"', "ui-monospace", "SFMono-Regular", "Menlo", "Consolas", "monospace"],
        display: ['"Instrument Serif"', "ui-serif", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
}
