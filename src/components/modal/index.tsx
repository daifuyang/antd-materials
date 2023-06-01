import * as React from 'react';
import { Modal as OriginalModal } from 'antd';
import { BaseDialog } from '../../shared/base/BaseDialog';

interface IModalOperationProps {
  content: string;
  type: string;
  action: string;
}

export type IModalProps = React.ComponentProps<typeof OriginalModal> & {
  __designMode?: 'design';
  operations?: IModalOperationProps[];
};

export default class Modal extends BaseDialog {
  render() {
    const innerProps = this.transformProps();
    return <OriginalModal {...this.props} {...innerProps} onClose={innerProps.onCancel} />;
  }
}
