const colors = require('tailwindcss/colors')
module.exports = {
  content: ["./public/index.html", "./src/**/*.{html,js}"],
  theme: {
    colors: {
      ...colors,
      'primary':"#CC2D4A",
      'secondary':"#8FA206",
      'tertiary':"#61AEC9",
    },
    fontFamily: { 
      Montserrat: ["Montserrat", "sans-serif"],
    },
    extend: {
      backgroundImage:{
        'sanFrancisco': "url('../img/sanFrancisco.jpeg')",
			  'sanFranciscoDesktop': "url('../img/sanFranciscoDesktop.jpeg')",
			  'yosemite': "url('../img/yosemite.jpeg')",
			  'seattle': "url('../img/seattle.jpeg')",
			  'new_york': "url('../img/new_york.jpeg')",
			  'norway': "url('../img/norway.jpeg')",
			  'sydney': "url('../img/sydney.jpeg')",
			  'miami': "url('../img/miami.jpeg')",
			  'switzerland': "url('../img/switzerland.jpeg')",
			  'bali': "url('../img/bali.jpeg')",
			  'norway': "url('../img/norway.jpeg')",
			  'chicago': "url('../img/chicago.jpeg')",
			  'europe': "url('../img/europe.jpeg')",
			  'iceland': "url('../img/iceland.jpeg')",
      },

    },
  },
  plugins: [
    require('@tailwindcss/forms'),
    require('@tailwindcss/typography'),
    require('@tailwindcss/aspect-ratio'),
    require('tailwind-scrollbar-hide'),
  ],
};