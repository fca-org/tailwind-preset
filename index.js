const { colors } = require('./config/colors');
const { container } = require('./config/container');
const { fonts } = require('./config/fonts');
const { typography } = require('./config/typography');

module.exports = {
  theme: {
    container,
    colors,
    extend: {
      ...fonts,
      typography
    },
  },
};
