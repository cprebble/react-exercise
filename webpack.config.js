const path = require('path');
const webpack = require('webpack');
const HtmlPlugin = require('html-webpack-plugin');

module.exports = [
	{
		target: 'node',
		devtool: 'source-map',
		entry: {
			'app': path.join(__dirname, 'src', 'index.jsx')
		},
		output: {
			path: path.join(__dirname, 'public'),
			filename: 'bundle.js'
		},
		module: {
			rules: [
				{
					test: /.jsx?$/,
					exclude: /node_modules/,
					include: path.join(__dirname, 'src'),
					use: [
						{
							loader: 'babel-loader'		
						}
					]
				}
			]
		},
		resolve: {
			extensions: ['.js', '.jsx']
		},
		plugins: [
			new webpack.DefinePlugin({
				"process.env": {
					NODE_ENV: JSON.stringify("development")
				}
			}),
			new HtmlPlugin({
				title: 'React Exercise',
				filename: 'index.html'
			})
		]
	}
];