const standardWorkflow = require('@fca/semantic-release-preset/workflows/standard.cjs')

const config = {
	extends: "@fca/semantic-release-preset",
  plugins: standardWorkflow(),
};

module.exports = config;
