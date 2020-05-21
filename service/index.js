const { Nuxt, Builder } = require('nuxt')

const app = require('express')()
// 用指定的配置对象实例化 Nuxt.js
const config = require('../nuxt.config.js')
config.dev = process.env.NODE_ENV !== 'production' && process.env.NODE_ENV !== 'test'
// const port = process.env.PORT || 3334
let port = 3337;
console.log('process.env.NODE_ENV', process.env.NODE_ENV);
if(process.env.NODE_ENV == 'test') {
  port = 3338;
}else if(process.env.NODE_ENV == 'production') {
  port = 3339;
}

const nuxt = new Nuxt(config)

// 用 Nuxt.js 渲染每个路由
app.use(nuxt.render)

// 在开发模式下启用编译构建和热加载
if (config.dev) {
  new Builder(nuxt).build()
    .then(listen)
} else {
  listen()
}

function listen () {
  // 服务端监听
  app.listen(port, '0.0.0.0')
  console.log('Server listening on `localhost:' + port + '`.' + '`process.env.NODE_ENV: `' + process.env.NODE_ENV)
}