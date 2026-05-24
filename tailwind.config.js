/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      colors: {
        ink: "#05070d",
        panel: "#0d1320",
        cyan: "#26d9ff",
        mint: "#57f2b7",
        amber: "#f5b84c",
      },
      boxShadow: {
        glow: "0 0 45px rgba(38, 217, 255, 0.18)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        scan: "scan 4.8s linear infinite",
        reveal: "reveal 0.8s ease both",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        scan: {
          "0%": { transform: "translateY(-100%)", opacity: "0" },
          "15%, 85%": { opacity: "1" },
          "100%": { transform: "translateY(260%)", opacity: "0" },
        },
        reveal: {
          "0%": { opacity: "0", transform: "translateY(18px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
    },
  },
  plugins: [],
};
