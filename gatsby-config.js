const { generateConfig } = require('gatsby-plugin-ts-config');

const flags = {
  PRESERVE_FILE_DOWNLOAD_CACHE: true,
  PRESERVE_WEBPACK_CACHE: true,
};

module.exports = { flags, ...generateConfig() };
