const config = {
    entry: './src/index.js',
    output: {
        path: './public/',
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
        ],
    },
};

export default config;
