module.exports = {
  plugins: {
    'postcss-px2rem': {
      remUnit: 75, // 75px = 1rem，对应的是我们设计稿的宽度，一般是750
      remPrecision: 3, // rem的小数点后位数
      minPixelValue: 1, // 小于或等于`1px`不转换为视窗单位，你也可以设置为你想要的值
      mediaQuery: false, // 允许在媒体查询中转换`px`
    },
  },
};
