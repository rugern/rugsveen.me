import path from 'path';
import webpack from 'webpack';

const config = {
    entry: path.resolve('src/index.js'),
    output: {
        path: path.resolve('public/'),
        publicPath: 'public/',
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
                loader: "html-loader!markdown-loader?gfm=false"
            },
            {
                test: /\.css$/,
                loader: "style-loader!css-loader"
            },
            {
                test: /\.(png|jpg|gif)$/,
                loader: "url-loader?limit=8192"
            },
            {
                test: /\.svg$/,
                loader: "url?limit=10000&mimetype=image/svg+xml"
            },
        ],
    },
    plugins: [
        new webpack.DefinePlugin({
            'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV || 'development'),
        }),
    ],
};

export default config;
