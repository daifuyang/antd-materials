import * as React from 'react';
import { Input as OriginalInput } from 'antd';

const {
  Group: OriginalGroup,
  TextArea: OriginalTextArea,
  Password: OriginalPassword,
  Search: OriginalSearch,
} = OriginalInput;

const Input = function (props: any) {
  return <OriginalInput {...props} />;
};

(Input as any).Group = (props: any) => <OriginalGroup {...props} />;
(Input as any).TextArea = (props: any) => <OriginalTextArea {...props} />;
(Input as any).Password = (props: any) => <OriginalPassword {...props} />;
(Input as any).Search = (props: any) => <OriginalSearch {...props} />;

export default Input;
