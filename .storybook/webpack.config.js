const path = require("path");
const TSDocgenPlugin = require("react-docgen-typescript-webpack-plugin");
module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: 'ts-loader',
    options: {
      configFile: 'tsconfig.storybook.json'
    }
  });
  config.plugins.push(new TSDocgenPlugin()); // optional
  config.resolve.extensions.push(".ts", ".tsx");
  return config;
};
