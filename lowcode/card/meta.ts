import snippets from './snippets';

export default {
  snippets,
  componentName: 'Card',
  title: '卡片',
  group: '基础组件',
  category: '容器',
  configure: {
    props: [
      {
        name: 'title',
        title: { label: '卡片标题', tip: '卡片标题' },
        setter: {
          componentName: 'MixedSetter',
          isRequired: true,
          props: {
            setters: ['StringSetter', 'SlotSetter'],
          },
        },
      },
      // {
      //   name: 'actions',
      //   title: { label: '卡片操作组', tip: '卡片操作组，位置在卡片底部' },
      //   propType: { type: 'arrayOf', value: 'node' },
      // },
      // {
      //   name: 'headStyle',
      //   title: { label: '标题区域样式', tip: '自定义标题区域样式' },
      //   propType: 'object',
      // },
      // {
      //   name: 'bodyStyle',
      //   title: { label: '内容区域样式', tip: '内容区域自定义样式' },
      //   propType: 'object',
      // },
      {
        name: 'bordered',
        title: { label: '显示边框', tip: '是否有边框' },
        setter: 'BoolSetter',
        defaultValue: true,
      },
      {
        name: 'cover',
        title: { label: '卡片封面', tip: '卡片封面' },
        setter: 'SoltSetter',
      },
      {
        name: 'extra',
        title: { label: '额外元素', tip: '卡片右上角的操作区域' },
        setter: {
          componentName: 'MixedSetter',
          isRequired: true,
          props: {
            setters: ['StringSetter', 'SlotSetter'],
          },
        },
      },
      {
        name: 'hoverable',
        title: { label: '可浮起', tip: '鼠标移过时可浮起' },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'loading',
        title: {
          label: 'loading',
          tip: '当卡片内容还在加载中时，可以用 loading 展示一个占位',
        },
        setter: 'BoolSetter',
        defaultValue: false,
      },
      {
        name: 'size',
        title: { label: '尺寸', tip: 'card 的尺寸' },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'default',
          props: {
            options: [
              {
                title: '默认',
                value: 'default',
              },
              {
                title: '小',
                value: 'small',
              },
            ],
          },
        },
      },
      {
        name: 'type',
        title: { label: '卡片类型', tip: '卡片类型' },
        setter: {
          componentName: 'RadioGroupSetter',
          initialValue: 'default',
          props: {
            options: [
              {
                title: '默认',
                value: 'default',
              },
              {
                title: '内联',
                value: 'inner',
              },
            ],
          },
        },
      },
    ],
    component: { isContainer: true },
    supports: {
      style: true,
      events: [
        {
          name: 'onTabChange',
          template:
            "onTabChange(key,${extParams}){\n// 页签切换的回调\nconsole.log('onTabChange', key);}",
        },
      ],
    },
  },
};
