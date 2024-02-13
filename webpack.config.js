const path = require('path');

const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const HtmlWebpackPlugin = require('html-webpack-plugin');
const {CleanWebpackPlugin} = require('clean-webpack-plugin')
const CopyWebpackPlugin = require('copy-webpack-plugin')
const OptimizeCssAssetWebpackPlugin = require('optimize-css-assets-webpack-plugin')
const TerserWebpackPlugin = require('terser-webpack-plugin')
const {BundleAnalyzerPlugin} = require('webpack-bundle-analyzer')
const SVGSpritemapPlugin = require('svg-spritemap-webpack-plugin');
const HtmlWebpackPartialsPlugin = require('html-webpack-partials-plugin');

const isDev = process.env.NODE_ENV === 'development'
const isProd = !isDev
const filename = ext => isDev ? `[name].${ext}` : `[name].[hash].${ext}`

const jsLoaders = () => {
  const loaders = [{
    loader: 'babel-loader',
    options: babelOptions()
  }]

  return loaders
}

const PAGES = ['index'];
const PARTIALS = ['meta', 'header', 'footer', 'loading'];

const PAGES_DIR = path.resolve(__dirname, 'src/page');
const PARTIALS_DIR = path.resolve(__dirname, 'src/partials');

const plugins = () => {
  const base = [
    ...PAGES.map((page) => new HtmlWebpackPlugin({
      template: `${PAGES_DIR}/${page}.html`,
      filename: `./${page}.html`,
      scriptLoading: 'blocking',
      inject: 'head',
      minify: {
        collapseWhitespace: isProd
      }
    })),
    ...PARTIALS.map(partial => {
      return new HtmlWebpackPartialsPlugin({
        path: `${PARTIALS_DIR}/${partial}.html`,
        location: partial === 'meta' ? 'head' : partial,
        priority:  partial === 'meta' ? 'high' : 'replace',
        template_filename:  '*'
      })
    }),
    new CleanWebpackPlugin(),
    new CopyWebpackPlugin({
      patterns: [
        {
          from: path.resolve(__dirname, 'src/favicon.ico'),
          to: path.resolve(__dirname, 'dist')
        },
        {
          from: path.resolve(__dirname, 'src/images'),
          to: path.resolve(__dirname, 'dist/images')
        },
        {
          from: path.resolve(__dirname, 'src/videos'),
          to: path.resolve(__dirname, 'dist/videos')
        },
        {
          from: path.resolve(__dirname, 'src/data'),
          to: path.resolve(__dirname, 'dist/data')
        }
      ]
    }),
    new MiniCssExtractPlugin({
      filename: filename('css')
    }),
    new SVGSpritemapPlugin('./src/icons/*.svg'),
  ]

  if (isProd) {
    base.push(new BundleAnalyzerPlugin())
  }

  return base
}

const optimization = () => {
  const config = {
    splitChunks: {
      chunks: 'all'
    }
  }

  if (isProd) {
    config.minimizer = [
      new OptimizeCssAssetWebpackPlugin(),
      //new TerserWebpackPlugin()
    ]
  }

  return config
}

const babelOptions = preset => {
  const opts = {
    presets: [
      ["@babel/preset-env", {
        useBuiltIns: "usage", // or "entry"
        corejs: 3,
      }]
    ],
    plugins: [
      '@babel/plugin-proposal-class-properties'
    ],
  }

  if (preset) {
    opts.presets.push(preset)
  }

  return opts
}

module.exports = {
  context: path.resolve(__dirname, 'src'),
  mode: 'development',
  entry: './js/index.js',
  output: {
    filename: filename('js'),
    path: path.resolve(__dirname, 'dist'),
  },
  resolve: {
    alias: {
      '@components': path.resolve(__dirname, 'src/js/components'),
      '@': path.resolve(__dirname, 'src'),
    }
  },
  devServer: {
    port: 4200,
    hot: isDev,
    watchFiles: {
      paths: ['src/**/*'],
      options: {
        usePolling: false,
      },
    },
  },
  devtool: isDev ? 'source-map' : false,
  module: {
    rules: [
      {
        test: /\.css$/i,
        use: [
          "style-loader",
          "css-loader",
          "postcss-loader"
        ],
      },
      {
        test: /\.scss$/i,
        use: [
          MiniCssExtractPlugin.loader,
          {
            loader: 'css-loader',
            options: {importLoaders: 1},
          },
          {
            loader: 'postcss-loader',
            options: {
              postcssOptions: {
                config: path.resolve(__dirname, 'postcss.config.js'),
              },
            },
          },
          "sass-loader"
        ],
      },
      {
        test: /\.(ico|gif|png|jpg|jpeg)$/i,
        type: 'asset/resource'
      },
      {
        test: /\.(woff(2)?|ttf|eot)$/,
        type: 'asset/resource',
        generator: {
            filename: './fonts/[name][ext]',
        },
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: jsLoaders()
      },
      {
        test: /\.svg/,
        type: 'asset/inline'
      }
    ],
  },
  plugins: plugins(),
  optimization: optimization(),
};