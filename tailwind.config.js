/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        base: "#1E1324",     // page ground — deep plum
        deep: "#170E1C",     // one step darker, for bands
        surface: "#2A1B33",  // cards
        raised: "#34223F",   // hover / inner surfaces
        gold: "#C6A664",     // primary
        goldlt: "#E0C78F",
        lilac: "#B98CD8",    // accent
        lilaclt: "#D4B6EA",
        ink: "#F2EDF5",      // text
        muted: "#9B8CA6",    // secondary text
      },
      fontFamily: {
        display: ["'Playfair Display'", "Georgia", "'Times New Roman'", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      borderRadius: {
        DEFAULT: "16px",
        xl: "16px",
        "2xl": "16px",
        "3xl": "20px",
        "4xl": "24px",
      },
      boxShadow: {
        soft: "0 18px 44px -26px rgba(0,0,0,.75)",
        glow: "0 18px 46px -20px rgba(198,166,100,.45)",
        lilac: "0 18px 46px -20px rgba(185,140,216,.45)",
      },
      keyframes: {
        blob: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(44px,-34px) scale(1.14)" },
          "66%": { transform: "translate(-30px,28px) scale(0.9)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-14px)" },
        },
        marquee: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-50%)" },
        },
        aurora: {
          "0%,100%": { backgroundPosition: "0% 50%" },
          "50%": { backgroundPosition: "100% 50%" },
        },
        shimmer: {
          "0%": { transform: "translateX(-130%)" },
          "55%,100%": { transform: "translateX(230%)" },
        },
        pulsering: {
          "0%": { transform: "scale(0.9)", opacity: ".75" },
          "70%,100%": { transform: "scale(1.8)", opacity: "0" },
        },
        wordin: {
          "0%": { opacity: "0", transform: "translateY(14px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        blob: "blob 20s ease-in-out infinite",
        float: "float 6s ease-in-out infinite",
        marquee: "marquee 32s linear infinite",
        aurora: "aurora 12s ease infinite",
        shimmer: "shimmer 4s ease-in-out infinite",
        pulsering: "pulsering 2.4s cubic-bezier(0,0,.2,1) infinite",
        wordin: "wordin .5s cubic-bezier(.22,1,.36,1)",
      },
    },
  },
  plugins: [],
};
