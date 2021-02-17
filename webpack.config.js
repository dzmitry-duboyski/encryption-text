const path = require('path');
const HTMLWebpackPlugin = require('html-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const CopyPlugin = require("copy-webpack-plugin");
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');
const TerserPlugin = require("terser-webpack-plugin");
// require('../index.html');

const isDev = process.env.NODE_ENV === 'development';
const isProd = !isDev;

// const optimization = () => {
//   const config = {
//     splitChunks: {
//       chunks: 'all'
//     },
//   }
//   if(isProd){
//     config.minimizer = [
//       new OptimizeCssAssetsPlugin(),
//       new TerserPlugin(),
//     ]
//   }
//   return config;  
// }

const filename = ext => isDev ? `[name].${ext}` :`[name].[fullhash].${ext}`;

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: {
    main: ['@babel/polyfill','./index.js'],
  },
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, './dist'),
    // publicPath: '/',
  },
  resolve: {
    alias: {
      '@models': path.resolve(__dirname,'src/models'),      
      '@': path.resolve(__dirname,'src'),      
    }
  },
  // optimization: optimization(),
  devServer: {
      contentBase: './dist',
      // publicPath: './dist',
      inline: true,
      hot: true,
      // contentBase: './dist',
      // contentBase: path.join(__dirname, 'dist'),
      // port: 9000,
      // hot: false,
      // liveReload: false,
      // watchContentBase: true,
      // open: true,
      // inline: true,
  },
  devtool: 'inline-source-map',
  plugins: [
    new HTMLWebpackPlugin({
      template: './index.html',
    }),
    new CleanWebpackPlugin(),
    new CopyPlugin({
      patterns: [
        { 
          from: path.resolve(__dirname,'src/assets/favicon.png'),
          to: path.resolve(__dirname, 'dist') 
        },
        { 
          from: path.resolve(__dirname,'src/assets/img/scrollup.png'),
          to: path.resolve(__dirname, 'dist') 
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
  ],
  module: {
    rules: [
       {
        test: /\.css$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          'css-loader',
        ],
      },
       {
        test: /\.s[ac]ss$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {
              publicPath: './',
            },
          },
          'css-loader',
          'sass-loader'
        ],
      },
      {
        test: /\.(png|jpe?g|svg|gif)$/i,
        use: ['file-loader']
      },
      {
        test: /\.(ttf|woff|woff2|eot)$/i,
        use: ['file-loader']
      },
      {
        test: /\.xml$/i,
        use: ['xml-loader']
      },
      {
        test: /\.csv$/i,
        use: ['csv-loader']
      },
      {
        test: /\.m?js$/,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ['@babel/preset-env'],
            plugins: ['@babel/plugin-proposal-class-properties']
          }
        }
      }
    ],
  },
}