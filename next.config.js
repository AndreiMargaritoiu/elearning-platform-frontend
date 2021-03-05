require("dotenv").config();
const webpack = require('webpack');

module.exports = {
  ignoreBuildErrors: false,
  webpack: (config, options) => {
    const definePlugin = new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(process.env.BASE_URL),
    });

    config.plugins.push(definePlugin);

    config.module.rules = config.module.rules.concat([{
      test: /\.(tsx|ts|js|mjs|jsx)$/,
      use: [
        'stylelint-custom-processor-loader',
      ],
      exclude: /node_modules/,
    }]);

    return config;
  },
};