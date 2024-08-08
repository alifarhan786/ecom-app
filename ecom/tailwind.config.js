/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily:{
       bodyFont: "Poppins" ,
       titleFont:  "Nunito Sans" ,
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities(
        {
          '.no-tap-highlight': {
            '-webkit-tap-highlight-color': 'transparent',
          },
        },
        ['responsive', 'hover']
      );
    },
  ],
}

