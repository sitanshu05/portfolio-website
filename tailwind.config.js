/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'orange': '#F96900',
        'light_blue': '#89BEFA',
        'purple' : '#B699DF',
        'bg_dark' : '#111111',
        'acc_grey' : "#545454"
      },
      fontFamily: {
        'code' : ['Fira Code', 'monospace'],
        'roboto' : ['Roboto', 'sans-serif']
      },
      screens : {
        '550' : '550px',
        '800' : '800px',
        '1000' : '1000px',
        '1800' : '1800px'
      }
    },
  },
  plugins: [],
}

