/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./Layout/**/*.{js,ts,jsx,tsx}",
    "./elements/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        xs: ".5rem",
        sm: ".875rem",
        md: "1.125rem",
        lg: "1.25rem",
        xl: "1rem", //16px
        "2xl": "1.5rem", //24px
        "3xl": "1.75rem", //28px
        "4xl": "2rem", //32px
        "5xl": "2.25rem", //36px
        "6xl": "2.875rem", //46px
        "7xl": "3.75rem", //80px
      },

      fontFamily: {
        heading: ["Mulish"],
      },

      lineHeight: {
        10: "1.875rem", //30px
        11: "2.5rem", //40px
        12: "2.75rem", //44px
        13: "3.125rem", //50px
        14: "3.25rem", //52px
        15: "4rem", //64px
        16: "6.8rem", //110px
      },

      borderRadius: {
        xs: "0.125rem",
        sm: ".5rem",
        md: "0.875rem",
        lg: "1.25rem",
        xl: "1.875rem",
      },

      colors: {
        primary: {
          100: "#213345",
          DEFAULT: "#0C1E30",
        },
        secondary: {
          100: "#A4659F",
          DEFAULT: "#863D80",
        },
        tertiary: {
          100: "#EECD63",
          DEFAULT: "#ECB602",
        },
        black: {
          100: "#22272F",
          DEFAULT: "#000000",
        },
        gray: {
          100: "#303740",
          200: "#FDFDFD",
          300: "#F0F2F3",
          DEFAULT: "#5E646E",
          400: "E0E4E8",
          500: "#91979D",
          600: "#C9CBCF",
        },

        white: {
          100: "#FDFDFD",
          DEFAULT: "#F4F5F5",
        },

        pink: {
          100: "#FFF1F7",
          DEFAULT: "#EE70A7",
          200: "#f9e6f1",
        },
        blue: {
          100: "#EEF5FF",
          DEFAULT: "#4D8AE4",
        },
        voilet: {
          100: "#FAF4FF",
          DEFAULT: "#C986FF",
        },
      },
    },
  },
  plugins: [
    function ({ addComponents }) {
      addComponents({
        ".container": {
          maxWidth: "100%",

          "@screen sm": {
            maxWidth: "640px",
            marginLeft: "15px",
            marginRight: "15px",
          },

          "@screen md": {
            maxWidth: "768px",
            marginLeft: "15px",
            marginRight: "15px",
          },

          "@screen lg": {
            maxWidth: "1260px",
          },

          "@screen xl": {
            maxWidth: "1340px",
          },
        },
      });
    },
  ],
};
