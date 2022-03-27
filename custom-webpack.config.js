const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = (config, options) => {


  config.entry = {
    legacy: './src/legacy.ts',
    polyfills: './src/polyfills.ts',
    main: './src/main.ts'
  };
  config.plugins = [
    ...config.plugins,
    new HtmlWebpackPlugin({
      chunks: 'all',
      inject: 'body',
      template: './src/index.html'
    }) ];

  console.log(config);
  return config;
}
