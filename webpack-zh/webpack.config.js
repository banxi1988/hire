/**
 * @type {import('webpack').Configuration}
 */
module.exports = {
  entry: "./src/index.js",

  mode: "production",

  output: {
    filename: "[name].[chunkhash:8].js"
  },

  optimization: {
    runtimeChunk: true,
    splitChunks: {
      cacheGroups: {
        vendors: {
          test: /[\\/]node_modules[\\/]/,
          filename: "[name].[chunkhash:8].js",
          chunks: "all",
          enforce: true
        },
        common: {
          test: /[\\/]common/,
          filename: "[name].[chunkhash:8].js",
          chunks: "all",
          enforce: true
        },
        module1: {
          test: /[\\/]module-1/,
          filename: "[name].[chunkhash:8].js",
          chunks: "all",
          enforce: true
        },
        module2: {
          test: /[\\/]module-2/,
          filename: "[name].[chunkhash:8].js",
          chunks: "all",
          enforce: true
        }
      }
    }
  }
};
