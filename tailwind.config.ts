import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // Overriding default colors to inject the Midnight Ocean theme globally
        blue: {
          50: '#e6faff',
          100: '#bdf1ff',
          200: '#8ae6ff',
          300: '#52d9ff',
          400: '#29d1ff',
          500: '#00d4ff', // Primary Accent (Neon cyan)
          600: '#00a8e6',
          700: '#0070f3', // Secondary Accent (Electric blue)
          800: '#0059c6',
          900: '#004a9e',
          950: '#003073',
        },
        violet: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        },
        indigo: {
          400: '#60a5fa',
          500: '#3b82f6',
          600: '#2563eb',
        }
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-geist-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;



