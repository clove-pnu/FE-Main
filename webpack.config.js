const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { ModuleFederationPlugin } = require('webpack').container;

module.exports = {
  entry: './src/index.tsx',
  output: {
    filename: 'bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    // When Build
    // publicPath: '/page/main/',
  },
  resolve: {
    extensions: ['.ts', '.tsx', '.js', '.css'],
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: 'ts-loader',
        exclude: /node_modules/,
      },
      {
        test: /\.css$/i,
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            options: {
              modules: {
                namedExport: false,
              },
            },
          },
        ],
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: 'asset/resource',
      },
      {
        test: /\.(woff|woff2|eot|ttf|otf)$/i,
        type: 'asset/resource',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new ModuleFederationPlugin({
      name: 'main',
      remotes: {
        auth: 'auth@http://localhost:3001/remoteEntry.js',
        deploy: 'deploy@http://localhost:3002/remoteEntry.js',
        // When build
        // auth: 'auth@http://34.47.117.26/page/auth/remoteEntry.js',
        // deploy: 'deploy@http://34.47.117.26/page/deploy/remoteEntry.js',
      },
      shared: ['react', 'react-dom', 'react-router-dom', 'axios'],
    }),
  ],
  devServer: {
    static: [
      {
        directory: path.join(__dirname, 'dist'),
      },
    ],
    compress: false,
    port: 3000,
    historyApiFallback: true,
    proxy: [
      {
        context: ['/auth'],
        target: 'http://34.47.117.26',
      },
      {
        context: ['/deploy'],
        target: 'http://34.47.117.26',
      },
    ],
  },
};
