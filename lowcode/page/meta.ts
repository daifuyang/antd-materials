// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPublicModelSettingPropEntry } from '@alilc/lowcode-types';

export default [
  {
    group: '组件',
    componentName: 'Page',
    title: '页面',
    props: [],
    configure: {
      events: {
        supportedLifecycles: [
          {
            description: '初始化时',
            name: 'constructor',
          },
          {
            description: '装载后',
            name: 'componentDidMount',
          },
          {
            description: '更新时',
            name: 'componentDidMount',
          },
          {
            description: '卸载时',
            name: 'componentWillUnmount',
          },
        ],
      },
      supports: {
        style: true,
      },
      component: {
        isContainer: true,
        disableBehaviors: '*',
      },
    },
    category: '基础',
  },
];
