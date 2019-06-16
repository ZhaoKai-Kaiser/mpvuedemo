const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('../configH5');
const packageConfig = require('../package.json');

exports.assetsPath = function(_path) {
  const assetsSubDirectory =
    process.env.NODE_ENV === 'production'
      ? config.build.assetsSubDirectory
      : config.dev.assetsSubDirectory;
  return path.posix.join(assetsSubDirectory, _path);
};

exports.cssLoaders = function(options) {
  options = options || {};
  const cssLoader = {
    loader: 'css-loader',
    options: {
      sourceMap: options.sourceMap,
    },
  };

  const postcssLoader = {
    loader: 'postcss-loader',
    options: {
      sourceMap: options.sourceMap,
      config: {
        path: path.resolve(__dirname, './'),
      },
    },
  };

  // https://github.com/shakacode/sass-resources-loader
  const sassResourcesLoader = {
    loader: 'sass-resources-loader',
    options: {
      // Provide path to the file with resources
      resources: [path.resolve(__dirname, './../src/style/theme.scss')],
    },
  };

  // generate loader string to be used with extract text plugin
  function generateLoaders(loader, loaderOptions) {
    const loaders = options.usePostCSS
      ? [cssLoader, postcssLoader]
      : [cssLoader];
    if (loader) {
      loaders.push({
        loader: `${loader}-loader`,
        options: Object.assign({}, loaderOptions, {
          sourceMap: options.sourceMap,
        }),
      });
      // 追加sass-resources-loaders
      if (['sass', 'scss'].includes(loader)) {
        loaders.push(sassResourcesLoader);
      }
    }
    // Extract CSS when that option is specified
    // (which is the case during production build)
    if (options.extract) {
      return ExtractTextPlugin.extract({
        use: loaders,
        fallback: 'vue-style-loader',
      });
    }
    return ['vue-style-loader'].concat(loaders);
  }
  // https://vue-loader.vuejs.org/en/configurations/extract-css.html
  const result = {
    css: generateLoaders(),
    postcss: generateLoaders(),
    less: generateLoaders('less'),
    sass: generateLoaders('sass', { indentedSyntax: true }),
    scss: generateLoaders('sass'),
    stylus: generateLoaders('stylus'),
    styl: generateLoaders('stylus'),
  };
  return result;
};
// Generate loaders for standalone style files (outside of .vue)
exports.styleLoaders = function(options) {
  const output = [];
  const loaders = exports.cssLoaders(options);
  for (const extension in loaders) {
    const loader = loaders[extension];
    output.push({
      test: new RegExp(`\\.${extension}$`),
      use: loader,
    });
  }
  return output;
};

exports.createNotifierCallback = () => {
  const notifier = require('node-notifier');
  return (severity, errors) => {
    if (severity !== 'error') return;
    const error = errors[0];
    const filename = error.file && error.file.split('!').pop();
    notifier.notify({
      title: packageConfig.name,
      message: `${severity}: ${error.name}`,
      subtitle: filename || '',
      icon: path.join(__dirname, 'logo.png'),
    });
  };
};
