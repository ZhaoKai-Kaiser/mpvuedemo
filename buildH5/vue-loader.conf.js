const utils = require('./utils');
const config = require('../configH5');

const isProduction = process.env.NODE_ENV === 'production';
const sourceMapEnabled = isProduction
  ? config.build.productionSourceMap
  : config.dev.cssSourceMap;

module.exports = {
  loaders: {
    ...utils.cssLoaders({
      sourceMap: sourceMapEnabled,
      extract: isProduction,
      usePostCSS: true,
    }),
    // 增加对ts的解析
    ts: [
      {
        loader: 'ts-loader',
        options: { appendTsSuffixTo: [/\.vue$/] },
      },
    ],
  },
  cssSourceMap: sourceMapEnabled,
  cacheBusting: config.dev.cacheBusting,
  transformToRequire: {
    video: ['src', 'poster'],
    source: 'src',
    img: 'src',
    image: 'xlink:href',
  },
};
