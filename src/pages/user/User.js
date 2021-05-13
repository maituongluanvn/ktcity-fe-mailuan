import React, { useState, useEffect, useCallback } from 'react';
import { Table, Tag, Space } from 'antd';
import { api } from 'Axios.js';
import * as Style from './style';

function User() {
  const [data, setData] = useState([]);

  const getData = useCallback(async () => {
    const { data, total } = await api.getUsers();
    setData(data);
  }, []);

  useEffect(() => {
    getData();
  }, [getData]);

  console.log(data);

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
