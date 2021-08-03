const defaultConfig = require('@wordpress/scripts/config/webpack.config');

module.exports = {
  ...defaultConfig,
  entry: './src/index.ts',
  module: {
    ...defaultConfig.module,
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/
      },
      ...defaultConfig.module.rules
    ]
  },
  resolve: {
    ...defaultConfig.resolve,
    extensions: ['.tsx', '.ts', 'js', 'jsx']
  }
};
