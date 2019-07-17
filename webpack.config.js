var path = require('path')
var htmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
	entry: path.join(__dirname, './src/js/main.js'),
	output: {
		path:path.join(__dirname,'./dist'),
		filename: "bundle.js"
	},
	module: {
		rules: [
      { test: /\.css$/, use: ['style-loader', 'css-loader'] },
      { test: /\.js$/, use: 'babel-loader', exclude: /node_modules/ },
      { test: /\.(jpg|png|gif|bmp|jpeg)$/, use: 'url-loader?name=images/[hash:8].[name].[ext]' },
	  { test: /\.scss$/,loader:'style-loader!css-loader!sass-loader'},
	  { test: require.resolve('zepto'),loader: 'exports-loader?window.Zepto!script-loader'}

		]
	},
	plugins:[
		new htmlWebpackPlugin({
			template: path.join(__dirname,'./src/index.html'),
			filename: 'index.html'
		})
	]
}

