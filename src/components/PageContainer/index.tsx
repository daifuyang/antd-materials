import * as React from 'react';
import { PageContainer } from '@ant-design/pro-components';
import { Breadcrumb } from 'antd';

export type IProContainerProps = React.ComponentProps<typeof PageContainer>;

const breadcrumbRender: any = (routers: any = []) => {
  const { breadcrumb = {} } = routers;
  const { items = [] } = breadcrumb;
  if (items.length === 0) return '';
  const newRoutes = [...items];
  const last = newRoutes?.pop();
  return (
    <Breadcrumb>
      {newRoutes.map((router: any) => (
        <Breadcrumb.Item key={router.path}>{router.name}</Breadcrumb.Item>
      ))}
      {last && <Breadcrumb.Item>{last.name}</Breadcrumb.Item>}
    </Breadcrumb>
  );
};

export default function (props: any) {
  return <PageContainer breadcrumbRender={breadcrumbRender} {...props} />;
}
