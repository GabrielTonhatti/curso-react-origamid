module.exports = {
    // indica que o devserver deve utilizar a raiz para servir o html.
    // atualização de 2021
    devServer: {
        static: "./",
    },
    // Nos módulos
    module: {
        // Aplique as seguintes regras
        rules: [
            {
                test: /\.css$/,
                use: ["style-loader", "css-loader"],
            },
            {
                // Nos arquivos que terminam ($) com .js
                test: /\.js$/,
                // Não procure nada em node_modules
                exclude: /node_modules/,
                // Use o seguinte:
                use: {
                    // Babel
                    loader: "babel-loader",
                    // Com as opções padrões para o React
                    options: {
                        presets: ["@babel/preset-react"],
                    },
                },
            },
        ],
    },
};
