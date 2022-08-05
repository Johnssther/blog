const CopyPlugin = require('copy-webpack-plugin');

module.exports = {
    entry: './src/resources/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/build/src/public'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    "style-loader", 
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                ],
                exclude: /node_modules/
            }
        ]
    },
    plugins: [
        new CopyPlugin({
            patterns: [
                { from: './src/resources/views', to: '../../src/resources/views' }
            ]
        })
    ],
}
