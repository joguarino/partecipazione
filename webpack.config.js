const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const path = require('path');

module.exports = {
	mode: 'production',
	entry: {
		index: './src/index.js',
		fonts: './src/fonts.js',
		style: {
			dependOn: 'fonts',
			import: './src/style.js',
		},
	},
	output: {
		path: path.resolve(__dirname, 'dist'),
		filename: '[name].bundle.js',
	},
	target: 'web',
	plugins: [
		new CleanWebpackPlugin(),
		new HtmlWebpackPlugin({
			title: 'Partecipazione',
			template: './src/index.html',
		}),
	],
	module: {
		rules: [
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(ttf|otf|)$/i,
				type: 'asset/resource',
			},
		],
	},
};
