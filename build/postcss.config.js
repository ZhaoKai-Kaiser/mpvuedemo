// https://github.com/michael-ciniawsky/postcss-load-config
module.exports = {
  plugins: {
    'postcss-mpvue-wxss': {
      replaceTagSelector: Object.assign(replaceTagSelectorMap, {
        '*': 'view, text', // 将覆盖前面的 * 选择器被清理规则
      }),
    },
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    // https://www.npmjs.com/package/postcss-pxtorpx
    'postcss-pxtorpx': {
      multiplier: 1,
      propList: ['*'],
    },
  },
};
