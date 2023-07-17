const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
// const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').
// BundleAnalyzerPlugin

module.exports = {
    mode: 'development',
    entry: path.resolve(__dirname, 'src/index.js'),
    entry: {
        bundle: path.resolve(__dirname, 'src/index.js')
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js',
        //prevents multiple js files in dist
        clean: true,
        //prevents loaded image from being renamed
        assetModuleFilename: '[name][ext]',
    },
    devtool: 'source-map',
    devServer: {
        static: {
            directory: path.resolve(__dirname, 'dist')
        },
        port: 3000,
        // when we run npm run dev it opens the browser automatically
        open: true,
        //
        hot: true,
        // enable gzip compression
        compress: true,
        historyApiFallback: true,
    },
    module: {
        rules: [
            {
                // general expersion so that every file with this flag uses these loaders
                test:/\.scss$/,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader',
                ],
            },
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                //i makes it case insensitive, used to find loader for svg file
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            },
        ],
    },
    //plugins allow for the entire dist folder to reubild
    plugins: [
        new HtmlWebpackPlugin({
            title: 'Webpack App',
            filename: 'index.html',
            template: 'src/template.html',
        }),
        // new BundleAnalyzerPlugin(),
    ],
}
