/** @type {import('tailwindcss').Config} */
export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["M PLUS Rounded 1c", "sans-serif"],
      },
      animation: {
        "fade-in-down": "fade-in-down 1s ease-in-out",
      },
      keyframes:{      "fade-in-down": {
        "0%": {
          opacity: "0",
          transform: "translateY(-20px)",
        },
        "100%": {
          opacity: "1",
          transform: "translateY(0)",
        },
      }
      },
    },
  },
  plugins: [],
};
