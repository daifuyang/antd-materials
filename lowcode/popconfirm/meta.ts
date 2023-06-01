import snippets from './snippets';

export default {
  snippets,
  componentName: 'Popconfirm',
  title: '气泡确认框',
  group: '基础组件',
  category: '反馈',
  props: [
    {
      name: 'title',
      title: { label: '确认框内容', tip: '确认框内容' },
      propType: { type: 'oneOfType', value: ['string', 'node', 'func'] },
    },
    {
      name: 'okText',
      title: { label: '确认按钮文字', tip: '确认按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'cancelText',
      title: { label: '取消按钮文字', tip: '取消按钮文字' },
      propType: 'string',
      setter: 'StringSetter',
      supportVariable: true,
    },
    {
      name: 'onConfirm',
      title: { label: '点击确认回调', tip: '点击确认回调' },
      setter: 'FunctionSetter',
    },
  ],
  configure: {
    configure: {
      props: {
        isExtends: true,
      },
    },
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onConfirm',
          template: "onConfirm(${extParams}){\n// 点击确认的回调\nconsole.log('onConfirm');}",
        },
      ],
    },
  },
};
