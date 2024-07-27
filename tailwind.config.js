/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter", "sans-serif"],
        "edu-sa": ["Edu SA Beginner", "cursive"],
        mono: ["Roboto Mono", "monospace"],
      },
      colors:{
        richblack: {
          5: "#F1F2FF",
          25: "#DBDDEA",
          50: "#C5C7D4",
          100: "#AFB2BF",
          200: "#999DAA",
          300: "#838894",
          400: "#6E727F",
          500: "#585D69",
          600: "#424854",
          700: "#2C333F",
          800: "#161D29",
          900: "#000814",
        },
        white:"#fff",
        black:"#000",
        transparent:"#ffffff00",
        yellow: {
          5: "#FFF970",
          25: "#FFE83D",
          50: "#FFD60A",
          100: "#E7C009",
          200: "#CFAB08",
          300: "#B69507",
          400: "#9E8006",
          500: "#866A04",
          600: "#6E5503",
          700: "#553F02",
          800: "#3D2A01",
          900: "#251400",
        },
        aqua:"#20c9c9",
        blue: {
          5: "#EAF5FF",
          25: "#B4DAEC",
          50: "#7EC0D9",
          100: "#47A5C5",
         
        },
      },
      extend: {
        maxWidth: {
          maxContent: "1260px",
          maxContentTab: "650px"
        },
      },
    },
  },
  plugins: [],
}

