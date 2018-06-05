const path = require('path');

// Best practice is to build to a different directory as to separate the source from the distribution
// therefor, I have included the dist and src sub directories inside the js directory to comply with the specification.
// Typically the src and dist directories would exist at the project root
const dist = 'js/dist';
const entry = './js/src/index.jsx'

module.exports = {
  entry,
  output: {
    filename: 'bundle.js',
    chunkFilename: '[name].bundle.js',
    path: path.resolve(__dirname, dist),
  },
  optimization: {
    splitChunks: {
      chunks: 'all'
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: [
          'babel-loader'
        ]
      },
      {
        test: /\.css$/,
        use: [
          "style-loader",
          "css-loader"
        ],
      },
      {
        test: /\.(jpeg)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8192
            }
          }
        ]
      }
    ]
  }
};
