module.exports = {
	entry: './src/jsfiles.js',
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