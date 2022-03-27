
process.env.VUE_APP_VERSION = require('./package.json').version

module.exports = {
    publicPath: process.env.BASE_URL,
    // publicPath: "./",
    // assetsDir: "./",
    transpileDependencies: [
        'vuetify'
    ],
    configureWebpack: {
        devServer: {
            headers: { 'Access-Control-Allow-Origin': '*' },
            //-- SECURITY --//
            // Do not set this flag to resolve the "invalid host request" error.
            // disableHostCheck: true
            /////////////////
            // case 1
            // public: 'dashboard.vircadiatest.com:8088',

            // This will resolve sockjs-node err_protocol_ssl
            public: 'dashboard.vircadiatest.com',
            host : '0.0.0.0',
            compress: true,
            disableHostCheck: true
        }
    }
}
