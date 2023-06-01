import { Snippet } from '@alilc/lowcode-types';

export const snippets: Snippet[] = [
  {
    title: 'PageContainer',
    screenshot: require('./__screenshots__/container.jpg'),
    schema: {
      componentName: 'PageContainer',
      props: {
        fixedHeader: true,
        header: {
          title: {
            type: 'JSExpression',
            value: 'this.state.name',
          },
          subTitle: '',
          extra: [],
          breadcrumb: {
            routes: {
              type: 'JSExpression',
              value: 'this.state.breadcrumb',
            },
            _unsafe_MixedSetter_routes_select: 'ExpressionSetter',
          },
        },
      },
    },
  },
];
