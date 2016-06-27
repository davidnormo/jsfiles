module.exports = {
	entry: './index.js',
	output: {
		path: './dist',
		filename: 'jsfiles.js',
	},
	module: {
		loaders: [{
			test: /\.js$/,
			exclude: /node_modules/,
			loader: "babel-loader"
		}]
	}
}