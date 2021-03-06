const BundleAnalyzerPlugin =
  require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const path = require('path');
function resolve(dir) {
  return path.join(__dirname, dir);
}

module.exports = {
  publicPath: './',
  assetsDir: 'static',
  productionSourceMap: false,
  devServer: {
    port: 8900,
    proxy: {
      '/api': {
        target: '/',
        changeOrigin: true,
        pathRewrite: {
          '^/api': '/api',
        },
      },
    },
  },
  chainWebpack: (config) => {
    if (
      process.env.NODE_ENV == 'production' ||
      process.env.NODE_BUILD_ENV == 'development'
    ) {
      // 移除 prefetch 插件
      config.plugins.delete('prefetch');
    }
    // 设置更多全局路径
    config.resolve.alias
      .set('@', resolve('src'))
      .set('@assets', resolve('src/assets'))
      .set('@components', resolve('src/components'))
      .set('@public', resolve('public'));
  },
  configureWebpack: (config) => {
    const res = {};

    if (process.env.NODE_BUILD_ENV == 'development') {
      res.plugins = res.plugins || [];
      res.plugins.push(new BundleAnalyzerPlugin());
    }

    if (
      process.env.NODE_ENV == 'production' ||
      process.env.NODE_BUILD_ENV == 'development'
    ) {
      res.optimization = {
        splitChunks: {
          // chunks: 'async',
          // minSize: 300000,
          maxSize: 650000,
          // maxAsyncRequests: 5,
          // maxInitialRequests: 3,
          cacheGroups: {
            vendors: {
              name: `chunk-vendors`,
              test: /[\\/]node_modules[\\/]/,
              chunks: 'initial',
              priority: 2,
              reuseExistingChunk: true,
              enforce: true,
            },
            common: {
              name: `chunk-common`,
              chunks: 'initial',
              minChunks: 2,
              maxInitialRequests: 5,
              minSize: 0,
              priority: 1,
              reuseExistingChunk: true,
              enforce: true,
            },
            elementui: {
              test: /[\\/]node_modules[\\/]element-ui[\\/]/, //匹配要拆分的模块
              name: 'chunk-elementui',
              chunks: 'all',
              priority: 3,
              reuseExistingChunk: true,
              enforce: true,
            },
            // echarts
            echarts: {
              test: /[\\/]node_modules[\\/](vue-)?echarts[\\/]/,
              name: 'chunk-echarts',
              chunks: 'all',
              priority: 4,
              reuseExistingChunk: true,
              enforce: true,
            },
            // endecharts
          },
        },
      };
    }

    return {
      ...res,
    };
  },
  // css相关配置
  css: {
    extract: true, // 是否使用css分离插件 ExtractTextPlugin
    sourceMap: false, // 开启 CSS source maps?
    loaderOptions: {
      css: {}, // 这里的选项会传递给 css-loader
    }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
    modules: false, // 启用 CSS modules for all css / pre-processor files.
  },
};
