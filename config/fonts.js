const defaultTheme = require( 'tailwindcss/defaultTheme' );

const fonts = {
  fontFamily: {
    sans: [ 'var(--font-sans, "Inter")', ...defaultTheme.fontFamily.sans ],
  },
};

module.exports = { fonts };
