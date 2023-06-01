import { Typography as OriginalTypography } from 'antd';
import * as React from 'react';

const Typography: any = function (props: any) {
  return <OriginalTypography {...props} />;
};

Typography.Title = OriginalTypography.Title;
Typography.Text = OriginalTypography.Text;
Typography.Link = function (props: any) {
  let { href } = props;
  if (props.__designMode === 'design') {
    href = undefined;
  }
  return <OriginalTypography.Link {...props} href={href} />;
};
Typography.Paragraph = OriginalTypography.Paragraph;

export default Typography;
