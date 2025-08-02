/**
 * Tailwind CSS configuration
 *
 * This file defines the sources Tailwind should scan for class names and
 * extends the default theme with custom colours that align with the
 * Catalyst Communications Network brand. Feel free to adjust the colours
 * if you refine your palette in Sanity or design updates.
 */
module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#00b44b', // bright green used for buttons and highlights
          dark: '#019944',    // darker variant for hover states
        },
        secondary: '#002d2b',  // deep teal for accents
        neutral: {
          light: '#f5f9f8',   // light background shade used on sections
          dark: '#121212',     // dark text colour
        },
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      },
    },
  },
  plugins: [],
};