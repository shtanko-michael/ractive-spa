const webpack = require('webpack');
const path = require('path');
const ExtractTextPlugin = require("extract-text-webpack-plugin");

const config = {
    entry: {
        app: path.resolve('src/js/app.js'),
        vendors: ['ractive','ractivejs-router','jquery','tether', 'bootstrap']
    },

    output: {
        path: path.resolve('dist'),
        filename: 'bundle.js'
    },

    module: {
        rules: [
            {
                test: /\.(js|jsx)$/,
                exclude: /node_modules/,
                loader: 'babel-loader'
            },
            {
				test: /\.css$/,
				use: ExtractTextPlugin.extract({
					use: "css-loader"
				})
            },
            {
                // you can scope this by directory or using another extension
                // using .html for your components gives you good
                // syntax highlighting with most editors
                test: /\.html$/,
                loader: 'ractive-loader'
            }
        ]
    },

	plugins: [
		new ExtractTextPlugin({
			filename: "bundle.css",
			allChunks: true
        }),
        new webpack.ProvidePlugin({
            $: 'jquery',
            jQuery: 'jquery',
            'window.jQuery': 'jquery',
            tether: 'tether',
            Tether: 'tether',
            'window.Tether': 'tether',
        }),
        new webpack.optimize.CommonsChunkPlugin({
            name: 'vendors',
            filename: 'vendors.js'
        })
	]
};

module.exports = config;