var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var precss       = require('precss');
var autoprefixer = require('autoprefixer');

const plugins = {
    production : [
        new webpack.DefinePlugin({'process.env.NODE_ENV': '"production"'}),
        new webpack.optimize.UglifyJsPlugin({compress: { warnings: false }}),
        new ExtractTextPlugin("css/style.css", {allChunks: true})
    ],
    dev : [
        new ExtractTextPlugin("css/style.css", {allChunks: true})
    ]
}

module.exports = {
    entry: "./src",
    output: {
        path: 'www',
        filename: "js/bundle.js"
    },
    plugins: plugins[process.env.NODE_ENV||'dev'],
    module: {
        loaders: [{
            test: /\.scss$/,
            loader: ExtractTextPlugin.extract(
                'css-loader?sourceMap!postcss-loader!sass-loader?outputStyle=expanded&sourceMap=true&sourceMapContents=true' // loaders to preprocess CSS
            )
        }, {
            test: /\.js?$/,
            exclude: /(node_modules|bower_components)/,
            loader: 'babel-loader',
            query: {
                presets: ['react', 'es2015', 'stage-1']
            },
            "optional": ["es7.classProperties"]
        }]
    },
    postcss: function () {
        return [precss, autoprefixer];
    },
    devtool: 'source-map',
    devServer: {
        contentBase: './www',
        port: 8088,
        historyApiFallback:  {
            index: '200.html'
        }
    }
};
