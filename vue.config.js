// vue.config.js
const path = require('path')
module.exports = {
  // baseUrl，请求服务域名路径
  publicPath: process.env.NODE_ENV === 'production' ? '/production-sub-path/' : '/',

  // 输出文件，放置生成的静态资源
  outputDir: 'dist',

  // 生产环境的 source map，默认 true 。设置 false 可加速生产环境构建
  productionSourceMap: false,

  // css 想关
  css: {
    // 为css开启sourceMap。设置 false 可加速生产环境构建
    sourceMap: false,
    // 向 CSS 相关的 loader 传递选项
    loaderOptions: {
      // css: {
      //   // 这里的选项会传递给 css-loader
      // },
      // postcss: {
      //   // 这里的选项会传递给 postcss-loader
      // },
      sass: {
        // @是src的别名
        prependData: `
          @import "@/utils/scss/style.scss";
        `
      }
    }
  },

  // devServe
  devServer: {
    port: 8090, // 端口号
    host: 'localhost',
    https: false, // https:{type:Boolean}
    open: true // 配置自动启动浏览器
    // proxy: 'http://localhost:4000' // 跨域处理，可以设置为指向开发环境 API 服务器的字符串，使任何请求，代理到 4000 端口
  },

  pluginOptions: {
    'style-resources-loader': {
      preProcessor: 'scss',
      patterns: [
        // 加上自己的文件路径，不能使用别名
        path.resolve(__dirname, '@/utils/scss/style.scss')
      ]
    }
  }
}
