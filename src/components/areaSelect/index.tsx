import * as React from 'react';
import { Cascader } from 'antd';
import json from './area.json';

const AreaSelect = (props: any) => {
  return (
    <Cascader
      fieldNames={{
        label: 'name',
        value: 'code',
        children: 'children',
      }}
      options={json}
      {...props}
    />
  );
};
export default AreaSelect;
