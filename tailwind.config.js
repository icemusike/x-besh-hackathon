/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#7B61FF",
        accent: "#00E5FF",
        dark: "#0B0B13",
        light: "#FFFFFF",
        success: "#00C48C",
        error: "#FF4D67",
      },
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        inter: ['Inter', 'sans-serif'],
      },
      boxShadow: {
        'glass': '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'hero-pattern': 'linear-gradient(to right bottom, rgba(123, 97, 255, 0.8), rgba(0, 229, 255, 0.8))',
      },
    },
  },
  plugins: [],
}
