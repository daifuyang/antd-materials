const Meta = {
  componentName: 'AreaSelect',
  title: '地区选择',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '基础组件',
  category: '表单',
  configure: {
    props: [
      {
        name: 'placeholder',
        title: { label: '输入框占位文本', tip: '输入框占位文本' },
        setter: 'StringSetter',
      },
    ],
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
    title: '地区选择',
    screenshot: '',
    schema: {
      componentName: 'AreaSelect',
      props: {
        placeholder: '请选择',
      },
      children: [],
    },
  },
];

export default {
  ...Meta,
  snippets,
};
