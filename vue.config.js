
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
            headers: { 'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
            },
            //-- SECURITY --//
            // Do not set this flag to resolve the "invalid host request" error.
            // disableHostCheck: true
            /////////////////
            public: 'dashboard.innoxai.com:8088',
            host: 'dashboard.innoxai.com',
            port : 8088
        }
    }
}
