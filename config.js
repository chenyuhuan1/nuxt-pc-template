// console.log(12312321, process.env.PATH_TYPE); //test   production
// console.log(12312321, process.env.NODE_ENV);  //development

let env = "";
// if(process.env.NODE_ENV == 'development') {
//     env = 'dev';  //本地开发环境
// }else if(process.env.NODE_ENV == 'production' && process.env.VUE_APP_TITLE === 'test') {
//     env = 'test'; //test环境
// }else if (process.env.NODE_ENV == 'production' && process.env.VUE_APP_TITLE === 'production') {
//     env = 'production'; //正式环境
// }

if (process.env.NODE_ENV == "development") {
  env = "dev"; //本地开发环境
} else if (process.env.NODE_ENV == "test") {
  env = "test"; //test环境
} else if (process.env.NODE_ENV == "production") {
  env = "production"; //正式环境
}
//接口地址
const baseURLs = {
  dev: "https://api.test.shunqi.sdbus.com.cn/v3/admin",
  test: "https://api.test.shunqi.sdbus.com.cn/v3/admin",
  production: "https://api.shunqi.sdbus.com.cn/v3/admin"
};

// const ports = {
//   dev: "3334",
//   test: "3335",
//   production: "3336"
// };


const config = {
  baseURL: baseURLs[env],
  // port: ports[env]
};

module.exports = config;
