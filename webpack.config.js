const HtmlWebpackPlugin = require("html-webpack-plugin");

module.exports = {
  entry: "./src/modules/index",
  plugins: [
    new HtmlWebpackPlugin({
      template: "./index.html",
    }),
  ],
  module: {
    rules: [
      {
        test: /\.s[ac]ss$/i,
        use: [
          // Creates `style` nodes from JS strings
          "style-loader",
          // Translates CSS into CommonJS
          "css-loader",
          // Compiles Sass to CSS
          "sass-loader",
        ],
      },
      {
        test: /.html$/i,
        use: {
          loader: "html-loader",
        },
      },
      {
        test: /\.(png|svg|jpg|jpeg|gif)$/i,
        type: "asset/resource",
        // use: {
        //   loader: "file-loader",
        //   options: {
        //     name: "[name].[ext]",
        //     outputPath: "images",
        //   },
        // },
      },
    ],
  },
};
