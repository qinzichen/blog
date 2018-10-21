module.exports = {
  lintOnSave: false,
  baseUrl: process.env.NODE_ENV === 'production'
    ? './'
    : '/',
  outputDir: 'docs',
  runtimeCompiler: undefined,
  productionSourceMap: undefined,
  parallel: undefined,
  css: undefined,

  pwa: {
    name: 'vue-blog'
  }
}