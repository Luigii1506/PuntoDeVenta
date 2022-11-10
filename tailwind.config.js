/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {

      }
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    styled: true,
    themes: ["light", "dark", "garden","wireframe"],
    base: true,
    utils: true,
    logs: true,
    rtl: false,
    prefix: "",
  },
}
