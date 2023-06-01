import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';

const TreeMeta: ComponentMetadata = {
  componentName: 'Tree',
  title: 'Tree',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  group: '基础组件',
  category: '表单',
  configure: {
    props: [
      {
        title: { label: '数据' },
        name: 'treeData',
        setter: 'JsonSetter',
      },
      {
        title: { label: '选中数据' },
        name: 'checkedKeys',
        setter: 'JsonSetter',
      },
      {
        title: { label: 'checkbox可选', tip: '节点前添加 Checkbox 复选框' },
        name: 'checkable',
        setter: 'BoolSetter',
      },
      {
        title: { label: '标题可选', tip: '是否可选中' },
        name: 'selectable',
        setter: 'BoolSetter',
      },
      {
        title: { label: '映射字段', tip: '自定义节点 title、key、children 的字段' },
        name: 'fieldNames',
        setter: 'JsonSetter',
      },
    ],
    supports: {
      className: true,
      style: true,
      events: [
        {
          name: 'onExpand',
        },
        {
          name: 'onSelect',
        },
        {
          name: 'onMouseEnter',
        },
        {
          name: 'onMouseLeave',
        },
        {
          name: 'onClick',
        },
        {
          name: 'onLoad',
        },
        {
          name: 'onDoubleClick',
        },
        {
          name: 'onCheck',
        },
        {
          name: 'onRightClick',
        },
        {
          name: 'onDragStart',
        },
        {
          name: 'onDragEnter',
        },
        {
          name: 'onDragOver',
        },
        {
          name: 'onDragLeave',
        },
        {
          name: 'onDragEnd',
        },
        {
          name: 'onDrop',
        },
      ],
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: 'Tree',
    screenshot: '',
    schema: {
      componentName: 'Tree',
      props: {
        treeData: [
          {
            title: 'tree Node',
            key: '0-0',
          },
        ],
      },
    },
  },
];

export default {
  ...TreeMeta,
  snippets,
};
