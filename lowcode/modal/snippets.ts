import { children } from '../pro-drawer/form-children';

export const snippets = [
  {
    title: '模态框',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/modal-1.png',
    schema: {
      title: '模态框',
      componentName: 'Modal',
      props: {
        title: '模态框',
        width: 760,
        operations: [
          {
            action: 'cancel',
            type: 'normal',
            content: '取消',
          },
          {
            action: 'submit',
            type: 'primary',
            content: '确认',
          },
        ],
      },
      children: [],
    },
  },
];
