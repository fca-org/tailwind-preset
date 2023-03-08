const defaultTheme = require( 'tailwindcss/defaultTheme' );

const fonts = {
  fontFamily: {
		sans: [ 'Inter', ...defaultTheme.fontFamily.sans ],
  },
};

module.exports = { fonts };
