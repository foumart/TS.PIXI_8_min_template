const path = require('path');

module.exports = {
    entry: './src/index.ts',
    output: {
        filename: 'bundle.js',
        path: path.resolve(__dirname, 'public/dist'),
    },
    resolve: {
        extensions: ['.ts', '.js', '.json'],
        modules: [path.resolve(__dirname, 'src'), 'node_modules'],
    },
    module: {
        rules: [
            {
                test: /\.ts$/,
                use: 'ts-loader',
                exclude: /node_modules/,
            },
        ],
    },
    mode: 'development',
    optimization: {
        splitChunks: {
            chunks: 'async',
            cacheGroups: {
                default: false,
                vendors: false,
            },
        },
    },
    devtool: 'source-map',
    watchOptions: {
        aggregateTimeout: 300, // Delay the rebuild after the first change (in ms)
        poll: 1000, // Check for changes every second
        ignored: /node_modules/, // Ignore changes in node_modules
    },
    devServer: {
        static: {
            directory: path.join(__dirname, 'public'),
        },
        compress: true,
        port: 9000,
        open: true,
        watchFiles: ['src/**/*']
    },
};
