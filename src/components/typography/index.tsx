import { Typography as OriginalTypography } from 'antd';
import * as React from 'react';

const Typography: any = function (props: any) {
  return <OriginalTypography {...props} />;
};

Typography.Title = OriginalTypography.Title;
Typography.Text = OriginalTypography.Text;
Typography.Link = OriginalTypography.Link;
Typography.Paragraph = OriginalTypography.Paragraph;

export default Typography;
