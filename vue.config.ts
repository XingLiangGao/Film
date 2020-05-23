module.exports = {
  configureWebpack: {
    resolve: {
      alias: {
        assets: '@/assets',
        components: '@/components',
        views: '@/views',
      },
    },
    externals: { // cdn 外链，避免包太大，首屏优化
      vue: 'Vue',
      'vue-router': 'VueRouter',
      vuex: 'Vuex',
    },
  },
  devServer: {
    proxy: {
      '/gateway': {
        target: 'https://m.maizuo.com', // 对应自己的接口
        changeOrigin: true,
        pathRewrite: {
          '^/gateway': '/gateway',
        },
      },
    },
  },
};
