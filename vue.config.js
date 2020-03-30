module.exports = {
  css: {
    loaderOptions: {
      sass: {
        prependData: '@import "@/styles/vars.scss";'
      }
    }
  },
  devServer: {
    proxy: 'https://www.source-code.co.uk/',
  }
}
