# pc-nuxt

> My fantabulous Nuxt.js project

## Build Setup

```bash
# install dependencies
$ npm install

# serve with hot reload at localhost:3000
$ npm run dev

# build for production and launch server
$ npm run build
$ npm run start

# generate static project
$ npm run generate
```

For detailed explanation on how things work, check out [Nuxt.js docs](https://nuxtjs.org).



普通测试部署
1.  npm run build:test
2.  上传config.js、.nuxt、static、nuxt.config.js、package.json到服务器
3.  npm install
4.  pm2 start npm --name '项目名' -- run start     //项目名为package.json中name字段



nuxt作为express中间件部署方式
举例我们发布测试环境项目
1.npm run build:test   //打包项目，生成.nuxt
2.将.nuxt、start.js、static、ecosystem.config.js、nuxt.config.js、package.json 上传至服务器
3、进入对应项目 npm install
4、pm2启动项目  npm run pm2:test
5、测试访问  （服务器外网地址:在start中指定的端口）  



具体查看掘金地址 https://juejin.im/post/5ec3abb66fb9a06c3f6e3485



