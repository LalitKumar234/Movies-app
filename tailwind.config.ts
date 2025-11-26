// Source - https://stackoverflow.com/q
// Posted by Libertatem
// Retrieved 2025-11-25, License - CC BY-SA 4.0

/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
      extend: {
        fontFamily: {
          poppins: ["Poppins", "sans-serif"],
        }
      },
    },
    plugins: [],
  }
  