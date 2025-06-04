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
        animation: {
          'gradient-x': 'gradient-x 15s ease infinite',
        },
        keyframes: {
          'gradient-x': {
            '0%, 100%': {
              'background-position': '0% 50%',
            },
            '50%': {
              'background-position': '100% 50%',
            },
          },
        },
      }
    },
    plugins: [],
    // Performance optimizations
    corePlugins: {
      preflight: true,
    },
    // Ensure CSS is extracted properly
    experimental: {
      optimizeUniversalDefaults: true,
    }
  }