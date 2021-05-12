import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space } from 'antd';

function TableCustom({ dataSource, columns }) {
  return <Table dataSource={dataSource} columns={columns} />;
}

TableCustom.propTypes = {
  dataSource: PropTypes.array,
  columns: PropTypes.array,
};

TableCustom.defaultProps = {
  dataSource: [
    {
      key: '1',
      name: 'Mike',
      age: 32,
      address: '10 Downing Street',
    },
    {
      key: '2',
      name: 'John',
      age: 42,
      address: '10 Downing Street',
    },
  ],
  columns: [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Age',
      dataIndex: 'age',
      key: 'age',
    },
    {
      title: 'Address',
      dataIndex: 'address',
      key: 'address',
    },
  ],
};

export default TableCustom;
