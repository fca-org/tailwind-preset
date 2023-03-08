const { colors } = require('./config/colors');
const { container } = require('./config/container');
const { fonts } = require('./config/fonts');
const { plugins } = require('./config/plugins');
const { typography } = require('./config/typography');

module.exports = {
  theme: {
    colors,
		container,
    extend: {
			...fonts,
      typography: typography()
    },
  },
  plugins,
};
