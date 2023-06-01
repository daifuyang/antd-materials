const Meta = {
  componentName: 'RichText',
  title: '富文本',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '基础组件',
  category: '表单',
  configure: {
    props: [],
    component: {},
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onClick',
        },
      ],
      loop: true,
    },
    advanced: {},
  },
  experimental: {
    callbacks: {},
  },
};
const snippets = [
  {
    title: '富文本',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN018CwRJM1ZkIpmeEfRD_!!6000000003232-55-tps-128-128.svg',
    schema: {
      componentName: 'RichText',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
