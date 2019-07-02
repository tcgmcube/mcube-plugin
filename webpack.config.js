var webpack = require('webpack');
var path = require('path');
module.exports = {
watch: true,
context: path.resolve(__dirname, 'public'),
entry: {
app: './app.js',
vendor: ['angular']
},
output: {
path:path.resolve(__dirname, 'public/build'),
filename: 'mcube_plugin.bundle.js'
},
plugins: [
new webpack.optimize.CommonsChunkPlugin(/* chunkName= */"vendor", /* filename= */"vendor.bundle.js")
],
module:{
    loaders:[{
        test: /\.css$/,
        loader:'style!css!'
}]
}
};