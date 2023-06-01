export default [
  {
    title: '表单容器',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/form-1.png',
    schema: {
      componentName: 'Form',
      props: {
        labelCol: {
          span: 6,
        },
        wrapperCol: {
          span: 14,
        },
      },
      children: [
        {
          componentName: 'Form.Item',
          props: {
            label: '表单项',
            labelAlign: 'right',
            colon: true,
            noStyle: false,
            valuePropName: 'value',
            name: 'a',
          },
          children: [
            {
              componentName: 'Input',
              props: {
                placeholder: '请输入',
                bordered: true,
                disabled: false,
                size: 'middle',
              },
            },
          ],
        },
        {
          componentName: 'Form.Item',
          props: {
            props: {
              label: '',
              labelAlign: 'right',
              colon: true,
              noStyle: false,
              valuePropName: 'value',
              name: '',
              wrapperCol: {
                offset: 6,
              },
            },
          },
          hidden: false,
          title: '',
          isLocked: false,
          condition: true,
          conditionGroup: '',
          children: [
            {
              componentName: 'Button',
              props: {
                type: 'primary',
                children: '提交',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: '',
                block: false,
                danger: false,
                ghost: false,
                disabled: false,
                style: {
                  marginRight: '16px',
                },
              },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
            },
            {
              componentName: 'Button',
              props: {
                type: 'default',
                children: '取消',
                htmlType: 'button',
                size: 'middle',
                shape: 'default',
                icon: '',
                block: false,
                danger: false,
                ghost: false,
                disabled: false,
              },
              hidden: false,
              title: '',
              isLocked: false,
              condition: true,
              conditionGroup: '',
            },
          ],
        },
      ],
    },
  },
];
