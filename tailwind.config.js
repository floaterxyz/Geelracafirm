export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'geelraca': {
          'green': '#008751', // Somalia flag green
          'blue': '#40A6FF',  // Light blue for contrast
          'white': '#FFFFFF'
        }
      },
      fontFamily: {
        'cursive': ['Playfair Display', 'serif'],
        'sans': ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}