import * as React from 'react';
import { Component, createRef } from 'react';
import { ProTable as OriginalProTable, ActionType, ProColumns } from '@ant-design/pro-components';

import { Button, TablePaginationConfig, ConfigProvider } from 'antd';
import zhCNIntl from 'antd/es/locale/zh_CN';
import enUSIntl from 'antd/es/locale/en_US';
import { isPlainObj } from '../../shared/index';
import { FormProps } from 'rc-field-form/lib/Form';

interface IValueEnum {
  text: string;
  value: string;
  status: string;
}

type IExtendsColType = ProColumns & {
  valueEnum?: IValueEnum[];
  renderTag?: boolean;
};

export type IProTableProps = React.ComponentProps<typeof OriginalProTable> & {
  columns?: IExtendsColType;
  intl?: string;
  onValuesChange?: FormProps['onValuesChange'];
  toolbar?: any;
};

const intlMap = {
  zhCNIntl,
  enUSIntl,
};

class ProTable extends Component<IProTableProps, any> {
  actionRef = createRef<ActionType>();
  componentDidMount() {}

  render() {
    const { columns, intl, onValuesChange, toolbar } = this.props;
    const pagination = this.props.pagination as TablePaginationConfig;

    // current 让用户自己配置的话，用户需要自己监听 onChange 事件去修改，对低代码平台不友好
    if (typeof pagination?.current === 'number') {
      delete pagination.current;
    }

    if (typeof pagination?.total === 'number') {
      delete pagination.total;
    }

    return (
      <ConfigProvider locale={intlMap[intl || 'zhCNIntl']}>
        <OriginalProTable
          columns={columns}
          actionRef={this.actionRef}
          // formRef={this.formRef}
          form={{ onValuesChange }}
          toolbar={toolbar}
        />
      </ConfigProvider>
    );
  }
}

export default ProTable;
