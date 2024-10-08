/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app/**/*.{js,ts,jsx,tsx,mdx}',
        './pages/**/*.{js,ts,jsx,tsx,mdx}',
        './components/**/*.{js,ts,jsx,tsx,mdx}',

        // Or if using `src` directory:
        './src/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    darkMode: 'class',
    theme: {
        extend: {
            colors: {
                darkBackground: '#000000',
                darkPages: '#282A3A',
                customBlue: '#2563eb',
                customDarkBg: '#10172A',
                'customDark-700': '#1D293C',
                800: '#112D4E',
                600: '#3F72AF',
                400: '#DBE2EF',
                200: '#F9F7F7',
            },
            fontFamily: {
                roboto: ['Roboto', 'sans-serif'],
                poppins: ['Poppins', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
