import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const GridMeta: ComponentMetadata = {
  componentName: 'Grid',
  title: 'Grid',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '基础组件',
  configure: {
    props: [
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'prefixCls',
            'zh-CN': 'prefixCls',
          },
        },
        name: 'prefixCls',
        setter: {
          componentName: 'StringSetter',
          isRequired: false,
          initialValue: '',
        },
      },
      {
        title: {
          label: {
            type: 'i18n',
            'en-US': 'hoverable',
            'zh-CN': 'hoverable',
          },
        },
        name: 'hoverable',
        setter: {
          componentName: 'BoolSetter',
          isRequired: false,
          initialValue: false,
        },
      },
    ],
    supports: {
      className: true,
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [];

export default {
  ...GridMeta,
  snippets,
};
