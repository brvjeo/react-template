const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDev = `${process.env.NODE_ENV}` === 'development';

module.exports = {
	entry: './src/index.tsx',
	output: {
		filename: isDev ? '[name].js' : '[name][contenthash].js',
		path: path.resolve(__dirname, 'build'),
		publicPath: '/',
		assetModuleFilename: isDev ? 'assets/[name][ext]' : 'assets/[name][hash][ext]',
		clean: true,
	},
	devServer: {
		port: 3000,
		historyApiFallback: true,
	},
	stats: 'normal',
	resolve: {
		extensions: ['.ts', '.tsx', '.js', '.jsx', '.css', '.scss', 'jpeg', 'jpg', '.png', 'json'],
		alias: {
			'@': path.resolve(__dirname, 'src'),
			'@components': path.resolve(__dirname, 'src/components/'),
			'@features': path.resolve(__dirname, 'src/features/'),
			'@services': path.resolve(__dirname, 'src/services/'),
			'@styles': path.resolve(__dirname, 'src/styles/'),
			'@assets': path.resolve(__dirname, 'src/assets/'),
			'@data': path.resolve(__dirname, 'src/data/'),
			'@store': path.resolve(__dirname, 'src/store/'),
			'@hooks': path.resolve(__dirname, 'src/hooks/'),
			'@utils': path.resolve(__dirname, 'src/utils/'),
			'@pages': path.resolve(__dirname, 'src/pages/'),
			'@types': path.resolve(__dirname, 'src/types/'),
		},
	},
	module: {
		rules: [
			{
				test: /\.s?css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(js|ts|tsx|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: [
							'@babel/preset-env',
							'@babel/preset-react',
							'@babel/preset-typescript',
						],
					},
				},
			},
			{
				test: /\.(png|jpg|jpeg|gif|svg)$/,
				type: 'asset/resource',
			},
			{
				test: /\.json$/,
				use: 'json-loader',
			},
		],
	},
	plugins: [
		new HtmlWebpackPlugin({
			title: __dirname,
			template: 'index.html',
		}),
		new MiniCssExtractPlugin({
			filename: isDev ? 'styles.css' : 'styles.[contenthash].css',
		}),
	],
};
