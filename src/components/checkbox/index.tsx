import * as React from 'react';
import { Checkbox as OriginalCheckbox } from 'antd';
import { withWrap } from '../../utils/hoc';

const Checkbox: any = function (props: any) {
  return (
    <div className="zero-antd-checkbox">
      <OriginalCheckbox {...props} />
    </div>
  );
};
Checkbox.Group = function (props: any) {
  return <OriginalCheckbox.Group {...props} />;
};

export default Checkbox;
