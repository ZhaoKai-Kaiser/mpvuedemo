var utils = require('./utils');
var config = require('../config');
// var isProduction = process.env.NODE_ENV === 'production'
// for mp
var isProduction = true;

module.exports = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: isProduction
        ? config.build.productionSourceMap
        : config.dev.cssSourceMap,
      extract: isProduction,
    }),
    // 增加对ts的解析
    ts: [
      {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },
  transformToRequire: {
    video: 'src',
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
