/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    fontFamily: {
      primary: 'Orbitron',
      secondary: 'Rajdhani',
      tertiary: 'Aldrich',
      Quaternary:'SouthernAire',
      quinary:'Simplemade',
    },
    container: {
      padding: {
        DEFAULT: '15px',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '960px',
      xl: '1200px',
    },
    extend: {
      colors: {
        primary: '#0a0a0a',
        accent: '#B809C3',
        secondary:'#3a7eb9',
      },
      backgroundImage: {
        site: "url('src/assets/images/site-bg.jpg')",
        about: "url('src/assets/images/about.png')",
        services: "url('src/assets/images/services.png')",
      },
    },
  },
  plugins: [],
}
