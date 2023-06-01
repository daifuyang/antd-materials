import { uuid } from '../utils';
import { children } from './form-children';

export const snippets = [
  {
    title: '抽屉弹窗',
    screenshot: 'https://alifd.alicdn.com/fusion-cool/icons/icon-antd/drawer-1.png',
    schema: {
      componentName: 'Drawer',
      title: '抽屉弹窗',
      props: {
        title: '抽屉弹窗',
        placement: 'right',
        destroyOnClose: true,
        width: 760,
        operations: [
          {
            action: 'cancel',
            type: 'normal',
            content: '取消',
            id: `operation_${uuid()}`,
          },
          {
            action: 'submit',
            type: 'primary',
            content: '确认',
            id: `operation_${uuid()}`,
          },
        ],
      },
      children: [],
    },
  },
];
