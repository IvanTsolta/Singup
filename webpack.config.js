const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/index.js' 
  },
  output: { 
    filename: '[name].[hash].bundle.js',
    chunkFilename: '[name].[hash].bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },

  module: { 
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: [
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: [
                [
                  '@babel/preset-env',
                  {
                    "targets": "last 1 version, > 1%, not dead"
                  }
                ]
              ],
            },
          },
          {
            loader: 'babel-loader',
            options: {
              babelrc: false,
              presets: ['@babel/preset-react'],
              plugins: ['transform-class-properties'],
            },
          },
        ],
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: 'public/index.html' 
    }),
  ]
};
