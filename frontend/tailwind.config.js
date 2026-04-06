/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        brand: {
          cyan: "#4FD1FF",
          blue: "#4F7CFF",
          emerald: "#42E2B8",
          amber: "#F5B942",
          rose: "#FF6B8A",
        },
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(255,255,255,0.05), 0 24px 80px rgba(0,0,0,0.45)",
      },
      backgroundImage: {
        "grid-fade":
          "linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)",
      },
      animation: {
        float: "float 7s ease-in-out infinite",
        pulseSoft: "pulseSoft 4s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseSoft: {
          "0%, 100%": { opacity: 0.4 },
          "50%": { opacity: 0.85 },
        },
      },
    },
  },
  plugins: [],
};
