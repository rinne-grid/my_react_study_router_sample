const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = [
    // JavaScipt
    {
        entry: {
            bundle: './src/app.js'
        },
        output: {
            path: path.resolve(__dirname, 'dist'),
            filename: '[name].js',
        },
        module: {
            rules: [
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, '/node_modules/'),
                    use: 'babel-loader',
                },
                {
                    test: /\.js$/,
                    exclude: path.resolve(__dirname, '/node_modules/'),
                    use: 'eslint-loader',
                }
            ]
        },
        devtool: 'source-map',
        devServer: {
            contentBase: './dist',
        }
    },
    // css
    {
        entry: {
            bundle: './src/css/style.scss'
        },
        output: {
            path: path.resolve(__dirname, './dist/css'),
            filename: '[name].css',
        },
        module: {
            rules: [
                {
                    test: /\.scss$/,
                    exclude: path.resolve(__dirname, '/node_modules/'),
                    loader: ExtractTextPlugin.extract({
                        fallback: 'style-loader',
                        use: 'css-loader?-url&sourceMap!sass-loader',
                    })
                }
            ]
        },
        devtool: 'source-map',
        plugins: [
            new ExtractTextPlugin('[name].css')
        ]
    }
]