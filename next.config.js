require("dotenv").config();
const webpack = require('webpack');

module.exports = {
  ignoreBuildErrors: false,
  webpack: (config) => {
    const definePlugin = new webpack.DefinePlugin({
      BASE_URL: JSON.stringify(process.env.BASE_URL),
      FIREBASE_API_KEY: JSON.stringify(process.env.FIREBASE_API_KEY),
      FIREBASE_AUTH_DOMAIN: JSON.stringify(process.env.FIREBASE_AUTH_DOMAIN),
      FIREBASE_PROJECT_ID: JSON.stringify(process.env.FIREBASE_PROJECT_ID),
      FIREBASE_STORAGE_BUCKET: JSON.stringify(process.env.FIREBASE_STORAGE_BUCKET),
      FIREBASE_MESSAGING_SENDER_ID: JSON.stringify(process.env.FIREBASE_MESSAGING_SENDER_ID),
      FIREBASE_APP_ID: JSON.stringify(process.env.FIREBASE_APP_ID),
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
