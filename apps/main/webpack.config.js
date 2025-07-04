const { NxAppWebpackPlugin } = require('@nx/webpack/app-plugin');
const TsconfigPathsPlugin = require('tsconfig-paths-webpack-plugin');
const { join } = require('path');

module.exports = {
  output: {
    path: join(__dirname, '../../dist/apps/main'),
    filename: 'main.js',
  },
  resolve: {
    extensions: ['.ts', '.js', '.json'],
    plugins: [
      new TsconfigPathsPlugin({
        configFile: join(__dirname, './tsconfig.app.json'),
      }),
    ],
    alias: {
      '@shared/core': join(__dirname, '../../libs/core/index.ts'),
    },
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        include: [
          join(__dirname, '../../libs/core'),
          join(__dirname, 'src'),
        ],
        use: 'ts-loader',
      },
    ],
  },
  externals: {},
  plugins: [
    new NxAppWebpackPlugin({
      target: 'node',
      main: './src/main.ts',
      compiler: 'tsc',
      tsConfig: './tsconfig.app.json',
      assets: ['./src/assets', './src/README.md'],
      optimization: false,
      outputHashing: 'none',
    }),
  ],
};
