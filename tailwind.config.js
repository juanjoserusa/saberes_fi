/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2500FF',    // Azul corporativo
        secondary: '#FFE500',  // Amarillo corporativo
      },
    },
  },
  plugins: [],
}
