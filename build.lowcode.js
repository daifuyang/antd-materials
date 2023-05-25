const { name, version } = require('./package.json');

const { library } = require('./build.json');

module.exports = {
  alias: {
    '@': './src',
  },
  plugins: [
    [
      '@alifd/build-plugin-lowcode',
      {
        library,
        engineScope: '@alilc',
        staticResources: {
          engineCoreCssUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.1.7-beta.17/dist/css/engine-core.css',
          engineExtCssUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6-beta.27/dist/css/engine-ext.css',
          engineCoreJsUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine@1.1.7-beta.17/dist/js/engine-core.js',
          engineExtJsUrl:
            'https://alifd.alicdn.com/npm/@alilc/lowcode-engine-ext@1.0.6-beta.17/dist/js/engine-ext.js',
        },
        npmInfo: {
          package: name,
          version,
        },
        lowcodeDir: 'lowcode',
        entryPath: 'src/index.tsx',
        builtinAssets: [
          {
            packages: [
              {
                package: 'moment',
                version: '2.24.0',
                urls: ['https://g.alicdn.com/mylib/moment/2.24.0/min/moment.min.js'],
                library: 'moment',
              },
              {
                package: 'lodash',
                library: '_',
                urls: ['https://g.alicdn.com/platform/c/lodash/4.6.1/lodash.min.js'],
              },
              {
                package: 'iconfont-icons',
                urls: '//at.alicdn.com/t/font_2369445_ukrtsovd92r.js',
              },
              {
                package: '@ant-design/icons',
                version: '4.7.0',
                urls: [`//g.alicdn.com/code/npm/@ali/ant-design-icons-cdn/4.5.0/index.umd.min.js`],
                library: 'icons',
              },
            ],
            sort: {
              groupList: ['普通组件', '高级组件'],
              categoryList: ['表格', '容器', '布局', '基础', '反馈'],
            },
            groupList: ['普通组件', '高级组件'],
            ignoreComponents: {},
          },
        ],
      },
    ],
    [
      '@alilc/build-plugin-alt',
      {
        type: 'component',
        inject: true,
        library,
        // 配置要打开的页面，在注入调试模式下，不配置此项的话不会打开浏览器
        // 支持直接使用官方 demo 项目：https://lowcode-engine.cn/demo/index.html
        openUrl: 'https://lowcode-engine.cn/demo/index.html?debug',
      },
    ],
  ],
};
