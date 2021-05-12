import React, { useState } from 'react';
import { Table, Tag, Space } from 'antd';

import * as Style from './style';

function User() {
  const [data, setData] = useState([]);
  return (
    <>
      <Style.Table dataSource={data} columns={columns} />
    </>
  );
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'ID',
    key: 'ID',
  },
  {
    title: 'Email',
    dataIndex: 'Email',
    key: 'Email',
  },
  {
    title: 'User name',
    dataIndex: 'userName',
    key: 'userName',
  },
  {
    title: 'Full name',
    dataIndex: 'fullName',
    key: 'fullname',
  },
  {
    title: 'Avatar',
    dataIndex: 'avatar',
    key: 'ava',
  },
  {
    title: 'Status',
    dataIndex: 'status',
    key: 'status',
  },
  {
    title: 'createdAt',
    dataIndex: 'createdAt',
    key: 'createdAt',
  },
  {
    title: 'updatedAt',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
  },
];

export default User;
