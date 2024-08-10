/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "../../packages/ui/**/*.{js,ts,jsx,tsx,mdx}"
  ],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
          'darkBackground': '#000000',
          'darkPages': '#282A3A',
          900: '#121212', // Very dark gray
          800: '#1E1E1E', // Near black
          700: '#2C2C2C', // Charcoal

      }
  },
  },
  plugins: [],
}

