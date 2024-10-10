/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary": "#F57105",
        "primaryLight": "#FDDEC3",
        "PrimaryDark": "#281301",
        "secondary": "#FF8901",
        "secondaryExtraLight": "#FFF5EB",
        "secondaryLight": "#FFCF99",
        "secondaryDark": "#3D1F00",
        "text": "#140A00",
        "textLight": "#FFF5EB",
        "bg": "#FFF5EB",
      }
    },
    backgroundImage: {
      'pattern': "url('/pattern.webp')",
      'hero-bg': "url('/hero-bg.webp')"
    }
  },
  plugins: [],
  darkMode: 'class'
}