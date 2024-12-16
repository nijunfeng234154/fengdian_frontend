const path = require('path')
const resolve = dir => {
  return path.join(__dirname, dir)
}
module.exports = {
  // open: true,
  publicPath: './',
  chainWebpack: config => {
    config.resolve.alias
      .set('_c', resolve('src/components')) // key,value自行定义，比如.set('@@', resolve('src/components'))

  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src/')
      }
    }
  },
  devServer: {
    // 设置代理
    proxy: {
      "/api": {
        // target: "http://192.168.124.32:5000", // 访问数据的计算机域名
        // target: "http://192.168.124.32:5000", // 访问数据的计算机域名
        target: "http://127.0.0.1:5000",
        ws: true, // 是否启用websockets
        changOrigin: true, //开启代理,
        pathRewrite: {
          // 重写代理规则，/api开头，代理到/
          "^/api": "/",
          // 例：/api/user/login代理到
          // http://localhost:5000/user/login
        },
      },
    },
  },
}
