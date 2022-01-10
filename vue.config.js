// vue.config.js
const px2rem = require("postcss-plugin-px2rem");
module.exports = {
  chainWebpack: config => {
    config
      .plugin('html')
      .tap(args => {
        args[0].title= '雅雅今天吃什么'
        return args
      })
  },
  css: {
    loaderOptions: {
      postcss: {
        plugins: [
          px2rem({ // postcss-plugin-px2rem 默认配置
            rootValue: 37.5, // 默认100
            unitPrecision: 5,
            propWhiteList: [],
            propBlackList: [],
            exclude: false,
            selectorBlackList: [],
            ignoreIdentifier: false,
            replace: true,
            mediaQuery: false,
            minPixelValue: 0 // 默认 0
          })
        ]
      }
    }
  }
};