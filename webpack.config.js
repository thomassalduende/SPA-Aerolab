// BASE PARA CUALQUIER PROYECTO

const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPluguin = require('copy-webpack-plugin');

module.exports = {//objeto para exportar la config
    entry: './index.js',   // punto de etrada
    output: { // ruta que construte la carpeta build, y se arroja al entorno de produccion
        path: path.resolve(__dirname, 'dist'),
        filename: 'main.js'//nombre final del archivo
    },
    resolve: {
        extensions: ['.js'],//le decimos a webpack que pueda procesar cualquier tipo de archivo de esta extension
    },
    module: {
        rules: [ //reglas que se le pasan, es un array
            {
                test: /\.js?$/,
                exclude: /node_modules/,//con este comando le decimos que excuya esta carpeta
                use: {
                    loader: 'babel-loader',
                }
            }
        ]
    },
    plugins: [
        new HtmlWebpackPlugin(
            {
                inject: true,
                template: './public/index.html',
                filename: './index.html',
            }
),
        new CopyWebpackPluguin({
            patterns: [{ from: './src/styles/styles.css',
            to: '' }],
        })
    ]
}