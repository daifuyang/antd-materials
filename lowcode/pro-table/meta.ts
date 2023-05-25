import { ComponentMetadata, Snippet } from '@alilc/lowcode-types';
import { uuid } from '../utils';

const ProTableMeta: ComponentMetadata = {
  componentName: 'ProTable',
  title: '查询表格',
  docUrl: '',
  screenshot: '',
  devMode: 'proCode',
  // group: '高级组件',
  category: '表格',
  configure: {
    props: [
      {
        name: 'columns',
        title: { label: '表格列', tip: '表格列的配置描述，具体项见下表' },
        setter: {
          componentName: 'ArraySetter',
          props: {
            itemSetter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: { label: '列标题', tip: 'title | 列标题' },
                      propType: {
                        type: 'oneOfType',
                        value: ['string', 'func'],
                      },
                      setter: [
                        'StringSetter',
                        {
                          componentName: 'SlotSetter',
                          title: '列标题插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['options'],
                            value: [],
                          },
                        },
                      ],
                      isRequired: true,
                    },
                    {
                      name: 'dataIndex',
                      title: { label: '数据字段', tip: 'dataIndex | 数据字段' },
                      propType: 'string',
                      setter: 'StringSetter',
                      isRequired: true,
                      defaultValue: () => uuid(),
                    },
                    {
                      name: 'valueType',
                      title: { label: '数据类型', tip: 'valueType | 数据类型' },
                      propType: 'string',
                      setter: {
                        componentName: 'SelectSetter',
                        props: {
                          options: [
                            {
                              title: '操作',
                              value: 'option',
                            },
                            {
                              title: '文本',
                              value: 'text',
                            },
                            {
                              title: '标签',
                              value: 'tag',
                            },
                            {
                              title: '数字',
                              value: 'digit',
                            },
                            {
                              title: '密码输入框',
                              value: 'password',
                            },
                            {
                              title: '金额',
                              value: 'money',
                            },
                            {
                              title: '日期',
                              value: 'date',
                            },
                            {
                              title: '日期时间',
                              value: 'dateTime',
                            },
                            {
                              title: '日期区间',
                              value: 'dateRange',
                            },
                            {
                              title: '日期时间区间',
                              value: 'dateTimeRange',
                            },
                            {
                              title: '链接',
                              value: 'link',
                            },
                            // {
                            //   title: '标签',
                            //   value: 'tag',
                            // },
                            {
                              title: '头像',
                              value: 'avatar',
                            },
                            {
                              title: '开关',
                              value: 'switch',
                            },
                            {
                              title: '百分比',
                              value: 'percent',
                            },
                            {
                              title: '进度条',
                              value: 'progress',
                            },
                            {
                              title: '下拉框',
                              value: 'select',
                            },
                            {
                              title: '单选框',
                              value: 'radio',
                            },
                            {
                              title: '多选框',
                              value: 'checkbox',
                            },
                            {
                              title: '图片',
                              value: 'image',
                            },
                            {
                              title: 'JSON代码框',
                              value: 'jsonCode',
                            },
                            {
                              title: '代码框',
                              value: 'code',
                            },
                            {
                              title: '颜色选择器',
                              value: 'color',
                            },
                            {
                              title: '级联选择器',
                              value: 'cascader',
                            },
                          ],
                        },
                      },
                    },
                    {
                      name: 'fieldProps',
                      title: {
                        label: '字段属性',
                        tip: 'fieldProps | 字段属性，会透传给表单项',
                      },
                      propType: 'object',
                      setter: 'JsonSetter',
                    },
                    {
                      name: 'formItemProps',
                      title: {
                        label: 'Form.Item 属性',
                        tip: 'formItemProps | 传递给 Form.Item 的配置,可以配置 rules',
                      },
                      propType: 'object',
                      setter: 'JsonSetter',
                    },
                    {
                      name: 'renderTag',
                      title: {
                        label: '使用 Tag 渲染',
                        tip: 'renderTag | 是否使用 Tag 渲染',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'valueEnum',
                      title: {
                        label: '枚举定义',
                        tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容',
                      },
                      propType: 'object',
                      setter: 'JsonSetter',
                    },
                    {
                      title: {
                        label: {
                          type: 'i18n',
                          'en-US': 'request',
                          'zh-CN': '远程获取枚举',
                        },
                        tip: 'request | 远程获取枚举',
                      },
                      name: 'request',
                      description: '远程获取枚举',
                      setter: {
                        componentName: 'FunctionSetter',
                        isRequired: false,
                      },
                    },
                    {
                      name: 'options',
                      title: {
                        label: 'options',
                        tip: '支持select, checkbox, radio, radioButton',
                      },
                      description: '数据源',
                      propType: 'object',
                      setter: 'JsonSetter',
                    },
                    {
                      name: 'width',
                      title: { label: '宽度', tip: 'width | 宽度' },
                      propType: {
                        type: 'oneOfType',
                        value: ['number', 'string'],
                      },
                      setter: ['NumberSetter', 'StringSetter', 'VariableSetter'],
                    },
                    {
                      name: 'tooltip',
                      title: {
                        label: '气泡提示',
                        tip: 'tooltip	| 气泡提示',
                      },
                      propType: 'string',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'ellipsis',
                      title: {
                        label: '是否自动缩略',
                        tip: 'ellipsis | 是否自动缩略',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'copyable',
                      title: {
                        label: '是否可复制',
                        tip: 'copyable | 是否可复制',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    // {
                    //   name: 'valueEnum',
                    //   title: {
                    //     label: '枚举定义',
                    //     tip: 'valueEnum | 值的枚举，会自动转化把值当成 key 来取出要显示的内容'
                    //   },
                    //   propType: 'object',
                    //   setter: 'JsonSetter'
                    // },
                    // {
                    //   title: {
                    //     label: {
                    //       type: 'i18n',
                    //       'en-US': 'request',
                    //       'zh-CN': '远程获取枚举'
                    //     },
                    //     tip: 'request | 远程获取枚举'
                    //   },
                    //   name: 'request',
                    //   description: '远程获取枚举',
                    //   setter: {
                    //     componentName: 'FunctionSetter',
                    //     isRequired: false
                    //   }
                    // },
                    {
                      name: 'align',
                      title: { label: '对齐方式', tip: 'align | 对齐方式' },
                      propType: {
                        type: 'oneOf',
                        value: ['left', 'right', 'center'],
                      },
                      defaultValue: 'left',
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: 'left',
                                value: 'left',
                              },
                              {
                                title: 'right',
                                value: 'right',
                              },
                              {
                                title: 'center',
                                value: 'center',
                              },
                            ],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                    {
                      name: 'fixed',
                      title: { label: '列是否固定', tip: 'fixed | 列是否固定' },
                      description: '（IE 下无效）列是否固定，可选 true (等效于 left) left right',
                      defaultValue: '',
                      propType: {
                        type: 'oneOf',
                        value: ['', 'left', 'right'],
                      },
                      setter: [
                        {
                          componentName: 'RadioGroupSetter',
                          props: {
                            options: [
                              {
                                title: '不固定',
                                value: '',
                              },
                              {
                                title: '固定在左侧',
                                value: 'left',
                              },
                              {
                                title: '固定在右侧',
                                value: 'right',
                              },
                            ],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                    {
                      name: 'className',
                      title: {
                        label: '列样式类名',
                        tip: 'className | 列样式类名',
                      },
                      propType: 'string',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'sorter',
                      title: {
                        label: '排序规则',
                        tip: 'sorter | 排序函数，本地排序使用一个函数，需要服务端排序可设为 true',
                      },
                      propType: { type: 'oneOfType', value: ['bool', 'func'] },
                      setter: ['BoolSetter', 'FunctionSetter', 'VariableSetter'],
                    },
                    {
                      name: 'key',
                      title: {
                        label: 'React key',
                        tip: 'key | React需要的key',
                      },
                      propType: 'string',
                      setter: 'StringSetter',
                    },
                    {
                      name: 'order',
                      title: {
                        label: '排序',
                        tip: 'order | 查询表单中的权重，权重大排序靠前',
                      },
                      propType: 'number',
                      setter: 'NumberSetter',
                    },
                    {
                      name: 'hideInSearch',
                      title: {
                        label: '隐藏搜索列',
                        tip: 'hideInSearch | 在查询表单中不展示此项',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'hideInTable',
                      title: {
                        label: '隐藏列',
                        tip: 'hideInTable | 在 Table 中不展示此列',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'filters',
                      title: {
                        label: '筛选菜单项',
                        tip: 'filters | 表头的筛选菜单项',
                      },
                      propType: 'object',
                      setter: 'JsonSetter',
                    },
                    {
                      name: 'fieldProps.showSearch',
                      title: {
                        label: '下拉框支持搜索',
                        tip: 'fieldProps.showSearch | 下拉框支持搜索',
                      },
                      propType: 'bool',
                      setter: 'BoolSetter',
                    },
                    {
                      name: 'render',
                      title: {
                        label: '自定义渲染',
                        tip: 'render | 插槽内的物料表达式可通过this.record获取当前行数据，this.index获取索引',
                      },
                      propType: 'func',
                      setter: [
                        {
                          componentName: 'SlotSetter',
                          title: '单元格插槽',
                          initialValue: {
                            type: 'JSSlot',
                            params: ['text', 'record', 'index'],
                            value: [],
                          },
                        },
                        'VariableSetter',
                      ],
                    },
                  ],
                },
              },
              initialValue: {
                title: '标题',
              },
            },
          },
        },
      },
      {
        title: '扩展',
        display: 'block',
        type: 'group',
        items: [
          {
            name: 'toolbar',
            title: { label: '列表工具栏', tip: 'toolbar | 工具栏操作' },
            setter: {
              componentName: 'ObjectSetter',
              props: {
                config: {
                  items: [
                    {
                      name: 'title',
                      title: { label: '标题' },
                      setter: ['StringSetter', 'SlotSetter'],
                    },
                    {
                      name: 'subTitle',
                      title: { label: '子标题' },
                      setter: ['StringSetter', 'SlotSetter'],
                    },
                    {
                      name: 'search',
                      title: { label: '查询区' },
                      setter: ['SlotSetter'],
                    },
                    {
                      name: 'actions',
                      title: { label: '操作区' },
                      setter: ['SlotSetter'],
                    },
                  ],
                },
              },
            },
          },
        ],
      },
    ],
    supports: {
      events: [
        {
          name: 'onLoad',
          description: '@name 数据加载完成后触发',
        },
        {
          name: 'beforeSearchSubmit',
          description: '@name 格式化搜索表单提交数据',
        },
        {
          name: 'onSubmit',
          description: '@name 提交表单时触发',
        },
        {
          name: 'onReset',
          description: '@name 重置表单时触发',
        },
        {
          name: 'onDataSourceChange',
          description: '@name 可编辑表格修改数据的改变',
        },
        {
          name: 'onValuesChange',
        },
      ],
      style: true,
    },
    component: {},
  },
};
const snippets: Snippet[] = [
  {
    title: '查询表格',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/table-1.png',
    schema: {
      componentName: 'ProTable',
      props: {},
    },
  },
];

export default {
  ...ProTableMeta,
  snippets,
};
