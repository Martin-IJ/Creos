/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#F7CB9C",
        secondary: "#FECE37",
        tertiary: {
          dark: "#121212",
        }
      },
      fontFamily: {
        secondary: ["Montserrat", "sans-serif"],
      }
    },
  },
  plugins: [],
}

