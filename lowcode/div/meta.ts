const Meta = {
  componentName: 'Div',
  title: '区块',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '基础组件',
  category: '容器',
  configure: {
    props: [],
    component: {
      isContainer: true,
    },
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
    title: '区块',
    screenshot:
      'https://img.alicdn.com/imgextra/i3/O1CN018CwRJM1ZkIpmeEfRD_!!6000000003232-55-tps-128-128.svg',
    schema: {
      componentName: 'Div',
      props: {},
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
