module.exports = {
    entry: './src/resources/app.js',
    output: {
        filename: 'bundle.js',
        path: __dirname + '/src/public'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    // Creates `style` nodes from JS strings
                    "style-loader",
                    // Translates CSS into CommonJS
                    "css-loader",
                    // Compiles Sass to CSS
                    "sass-loader",
                  ],
                  exclude:/node_modules/
            }
        ]
    }
}