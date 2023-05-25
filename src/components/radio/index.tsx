import * as React from 'react';

import { Radio as OriginalRadio } from 'antd';

const Radio: any = function (props: any) {
  return (
    <div className="zero-antd-radio">
      <OriginalRadio {...props} />
    </div>
  );
};

Radio.Group = function (props: any) {
  return <OriginalRadio.Group {...props} />;
};

export default Radio;
