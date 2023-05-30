### Initialize the node project using
```
npm init -y
```
> It will create a `package.json` file which holds information about the project. Mainly the libraries
### Install `react` and `react-dom` library
```
npm install react react-dom
```
> It will create `package-lock.json` it locks the version we are using. So no depenencies break when updated. Also there will me `node_modules` folder holding all the packages
### Install `babel` and additional packages
```
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader
```
### Setup babel file 
Create `.babelrc` file in the directory and add
```
{
    "preset" : ["@babel/preset-react","@babel-preset-env"]
}
```
### Install webpack
```
npm install webpack webpack-cli webpack-dev-server
```
### Setup webpack file
Create `webpack.config.js` and add
```
const HtmlWebpackPlugin = require("html-webpack-plugin");
const path = require("path");
// Which file to look at are written in module.exports
module.exports = {
  entry: "./src/index.js",
  output: {
    filename: "bundle.[hash].js",
    path: path.resolve(__dirname, "dist"),
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: "./src/index.html",
    }),
  ],
  // Take a look at all the following files from array
  resolve: {
    modules: [__dirname, "src", "node_modules"],
    extensions: ["*", ".js", ".jsx", ".tsx", ".ts"],
  },
  // Here it is said if there is .jsx file use the babel-loader
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        loader: require.resolve("babel-loader"),
      },
      {
        test: /\.css$/,
        use: ["style-loader", "css-loader"],
      },
      {
        test: /\.png|svg|jpg|gif$/,
        use: ["file-loader"],
      },
    ],
  },
};
```
### Add all react codes in `src` folder an we good to go
- Create `App.js` and create components
- Import created components in `Index.js`
- In `index.html` create div and add id to it

### To run it with webpack
In `package.json` modify the "scripts" section with
```
  "scripts": {
    "start": "webpack-dev-server --hot --open",
    "build": "webpack --config webpack.config.js --mode production"
  },
```
To start now use the following command:
```
npm start
```
To build the app
```
npm run build
```
This will create the `dist` folder