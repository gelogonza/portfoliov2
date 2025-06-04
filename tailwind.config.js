/** @type {import('tailwindcss').Config} */
export default {
    content: [
      "./index.html",
      "./src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
      extend: {
        colors: {
          'primary': '#FF0000',
          'dark': '#000000',
          'darker': '#0A0A0A',
        },
        fontFamily: {
          'satoshi': ['Satoshi', 'sans-serif'],
        },
      }
    },
    plugins: [],
    // Performance optimizations
    corePlugins: {
      preflight: true,
    }
  }