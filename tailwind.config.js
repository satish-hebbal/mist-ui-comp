/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        giloryReg: ['gilory-reg', 'sans-serif'],
        gilorySemiBold: ['gilory-semibold', 'sans-serif'],
        giloryBold: ['gilory-bold', 'sans-serif'],
        giloryMed: ['gilory-med', 'sans-serif'],
        montserrat: [
          "Montserrat",
          "sans-serif"
        ],
      },
      fontWeight: {
        
        'extra-light': 100,
        'light': 300,
        'regular': 400,
        'bold': 700,
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        'baseSaf': '#FFE6A9',
        'textBoxBG': '#FFFFF4',
        'buttonBG': '#FF9933',
        'BG1': '#FFEEC4',
        'BG2': '#FDF9EE',
        'BG3': '#f5f5f5',
      },
    },
  },
  plugins: [],
}