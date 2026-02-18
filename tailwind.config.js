/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["DM Sans", "system-ui", "sans-serif"],
        display: ["Outfit", "system-ui", "sans-serif"],
      },
      colors: {
        brand: "#6b4a2b",
        "brand-gold": "#9c7a57",
        contact: "#5a3b1f",
      },
    },
  },
  plugins: [],
};
