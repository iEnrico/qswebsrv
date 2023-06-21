const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
    transpileDependencies: true,
    
    /*
    css: {
        loaderOptions: {
          sass: {
            additionalData: `@import "@/scss/_variables.scss";`,
          },
        },
      },*/

    //devServer: {
    //    https: true,
    //    allowedHosts: 'all',
    //    client: {
    //        webSocketTransport: 'ws',
    //        webSocketURL: 'wss://0.0.0.0:8080/ws'
    //    },
    //    webSocketServer: 'ws'
    //}
})