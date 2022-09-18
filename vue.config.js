const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true,
  devServer:{
    host:'127.0.0.1',
    open:true,
    port:8000
  },
  lintOnSave:false
})