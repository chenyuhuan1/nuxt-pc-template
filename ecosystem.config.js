module.exports = {
  apps: [
    {
      name: 'pc-nuxt',
      script: 'service/index.js',
      append_env_to_name: true,
      env: {
        COMMON_VARIABLE: 'true'
      },
      env_production: {
        NODE_ENV: 'production'
      },
      env_test: {
        NODE_ENV: 'test'
      }
    }
  ],
}