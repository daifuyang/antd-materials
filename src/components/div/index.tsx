import * as React from 'react';

const Div = (props: any) => {
  const { children } = props;
  return <div {...props}>{children}</div>;
};
export default Div;
