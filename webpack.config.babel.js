import path from 'path';
import webpack from 'webpack';

const config = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public/'),
        filename: 'main.js',
    },
    module: {
        loaders: [
            {
                test: /\.jsx?$/,
                exclude: /node_modules/,
                loaders: [
                    'jsx',
                    'babel',
                ],
            },
            {
                test: /\.md$/,
                loader: 'html-loader!markdown-loader?gfm=false',
            },
            {
                test: /\.css$/,
                loader: 'style-loader!css-loader',
            },
            {
                test: /\.png$/,
                loader: 'url-loader?mimetype=image/png',
            },
        ],
    },
    resolve: {
        extensions: ['', '.js', '.jsx', '.json', '.scss'],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
    devServer: {
        historyApiFallback: true,
    },
};

export default config;
