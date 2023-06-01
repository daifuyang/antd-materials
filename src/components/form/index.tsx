import * as React from 'react';
import type { FormInstance, NamePath } from 'antd';
import { Form as OriginalForm } from 'antd';

import { withSingleFunctionChild } from '../../utils/hoc';

export class Form extends React.Component {
  static displayName: 'Form';
  formRef = React.createRef<FormInstance>();

  submit = () => {
    this.formRef.current!.submit();
  };

  getFieldsValue = () => {
    this.formRef.current!.getFieldsValue();
  };

  getFieldValue = (name: NamePath) => {
    this.formRef.current!.getFieldValue(name);
  };

  resetFields = (name?: NamePath) => {
    this.formRef.current!.resetFields(name);
  };

  setFieldValue = (name: NamePath, value: any) => {
    this.formRef.current!.setFieldValue(name, value);
  };

  setFieldsValue = (values: any) => {
    this.formRef.current!.setFieldsValue(values);
  };

  validateFields = (name?: NamePath) => {
    this.formRef.current!.validateFields(name);
  };

  render() {
    return <OriginalForm ref={this.formRef} {...this.props} />;
  }
}

(Form as any).Item = (props: any) => {
  const { name, rules = [] } = props;

  // const rules = [];
  // if (requiredobj && requiredobj.required) {
  //   rules.push(requiredobj);
  // }
  // if (typeobj && typeobj.type) {
  //   rules.push(typeobj);
  // }
  // if (patternobj && patternobj.pattern) {
  //   rules.push(patternobj);
  // }
  // if (lenobj && (lenobj.max || lenobj.min)) {
  //   rules.push(lenobj);
  // }
  // if (validator && typeof validator === 'function') {
  //   rules.push({
  //     validator: (_: any, value: any) => validator(value),
  //   });
  // }

  const namePath = typeof name === 'string' && name.indexOf('.') > 0 ? name.split('.') : name;

  // https://ant.design/components/form-cn/#components-form-demo-complex-form-control
  // <Form.Item name="field" /> 只会对它的直接子元素绑定表单功能
  const { children, ...other } = props;
  let node = children;
  if (Array.isArray(children) && children.length === 1) {
    // 如果 children.length > 1， 说明 Form.Item 只充当布局的作用
    node = children[0];
  }

  return (
    <OriginalForm.Item {...other} name={namePath} rules={rules}>
      {node}
    </OriginalForm.Item>
  );
};

(Form as any).displayName = 'Form.Item';

(Form as any).List = withSingleFunctionChild(OriginalForm.List);

export default Form;
