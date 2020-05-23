module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
      },
    },
    externals: { 
      'vue': 'Vue',
      'vue-router': 'VueRouter',
      'vuex': 'Vuex'
    },
  },
  devServer: {
    port: "8080",
    proxy: {
      '/api': {
        target: 'https://douban.uieee.com', 
        changeOrigin: true,
        ws: true,
        pathRewrite: {
          '^/api': ''
        }
      }
    }
  },
};
