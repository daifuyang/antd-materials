import snippets from './snippets';

export default {
  snippets,
  componentName: 'Typography.Link',
  title: '链接',
  group: '基础组件',
  category: '基础',
  props: [
    {
      name: 'children',
      title: { label: '内容', tip: '内容' },
      propType: 'string',
      defaultValue: '',
    },
    {
      name: 'href',
      title: { label: '跳转链接', tip: '跳转链接' },
      propType: 'string',
      setter: ['PageSetter', 'StringSetter'],
    },
    {
      name: 'target',
      title: { label: '跳转位置', tip: '在何处显示链接的资源' },
      propType: {
        type: 'oneOf',
        value: ['_self', '_blank', '_parent', '_top'],
      },
      defaultValue: '_self',
    },
    {
      name: 'disabled',
      title: { label: '禁用', tip: '禁用' },
      setter: 'BoolSetter',
    },
  ],
  configure: {
    supports: {
      events: [
        {
          name: 'onClick',
          template:
            "onClick(event,${extParams}){\n    // 点击按钮时的回调\n    console.log('onClick', event);\n  }\n",
        },
      ],
      style: true,
    },
  },
};
