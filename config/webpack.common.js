var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var helpers = require('./helpers');

module.exports = {
    entry: {
        'polyfills': './src/polyfills.ts',
        'vendor': './src/vendor.ts',
        'app': './src/main.ts'
    },

    resolve: {
        extensions: ['.js', '.ts']
    },

    module: {
        rules: [
            {
                test: /\.ts$/,
                use: [
                    {
                        loader: 'awesome-typescript-loader',
                        options: {configFileName: helpers.root('', 'tsconfig.json')}
                    },
                    'angular2-template-loader'
                ]
            },
            {
                test: /\.html$/,
                use: 'html-loader'
            },
            {
                test: /\.(png|jpe?g|gif|svg|woff|woff2|ttf|eot|ico)$/,
                use: 'file-loader?name=assets/[name].[hash].[ext]'
            },
            //First pattern excludes .css files within /src/app directories (component-scoped styles)
            //Only extracts application-wide styles
            {
                test: /.css$/,
                exclude: helpers.root('src', 'app'),
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: [{
                        loader: 'css-loader',
                        options: {sourceMap: true}
                    }]
                })
            },
            //Second pattern treats component-scoped styles as string in raw loader (which Angular expects in styleUrls metadata)
            {
                test: /.css$/,
                include: helpers.root('src', 'app'),
                use: ['raw-loader']
            }
            // {
            //     test: /\.css$/,
            //     exclude: helpers.root('src','app'),
            //     loader: extractCss.extract({fallback: 'style-loader', use: 'css-loader'})
            // },
            // {
            //     test: /\.css$/,
            //     include: helpers.root('src','app'),
            //     use: [
            //         {
            //             loader: 'to-string-loader'
            //         },
            //         {
            //             loader: 'css-loader'
            //         }]
            // },
            // {
            //     test: /\.(css)$/,
            //     include: helpers.root('src','app'),
            //     use: ExtractTextPlugin.extract({
            //         fallback: 'style-loader',
            //         use: [{
            //             loader: 'to-string-loader'
            //         }, {
            //             loader: 'css-loader',
            //             options: { sourceMap: true }
            //         }]
            //     })
            // }
            // {
            //     test: /\.css$/,
            //     include: helpers.root('src', 'app'),
            //     use: 'raw-loader'
            // }
        ]
    },

    plugins: [
        new webpack.ContextReplacementPlugin(
            // The (\\|\/) piece accounts for path separators in *nix and Windows
            /angular(\\|\/)core(\\|\/)(esm(\\|\/)src|src)(\\|\/)linker/,
            helpers.root('./src'), // location of your src
            {} // a map of your routes
        ),
        new webpack.optimize.CommonsChunkPlugin({
            name: ['app', 'vendor', 'polyfills']
        }),
        new HtmlWebpackPlugin({
            template: 'src/index.html'
        })
    ],

};
