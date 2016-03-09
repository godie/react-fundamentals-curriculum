var HtmlWebpackPlugin = require('html-webpack-plugin')
var HTMLWebpackPluginConfig = new HtmlWebpackPlugin({
	template: __dirname + '/app/index.html',
	filename: 'index.html',
	inject: 'body'
});

module.exports = {
	entry: ['./app/index.js'],
	module: {
	loaders: [
		//{test:/\.coffee$/, exclude: /node_modules/, laoder: "coffee-loader"}
		{test:/\.js$/, exclude:/node_modules/, include: __dirname+'/app', loader: "babel-loader"}
		]
	},
	output: {
		filename: 'index_bundle.js',
		path: __dirname + '/dist'
	},
	plugins: [HTMLWebpackPluginConfig]
};