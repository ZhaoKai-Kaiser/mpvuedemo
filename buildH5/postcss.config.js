// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  plugins: {
    // 'postcss-mpvue-wxss': {},
    'postcss-import': {},
    'postcss-url': {},
    // to edit target browsers: use "browserslist" field in package.json
    autoprefixer: {},
    // https://github.com/cuth/postcss-pxtorem
    'postcss-pxtorem': {
      rootValue: 100,
      propList: ['*'],
    },
  },
};
