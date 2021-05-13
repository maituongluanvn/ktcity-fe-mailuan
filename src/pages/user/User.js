import React, { useState, useEffect, useCallback } from 'react';

import { api } from 'Axios.js';
import * as Style from './style';
import { formatDate } from 'utils/formatDate';
// import { useForm } from 'react-hook-form';

function User() {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  // const { register, handleSubmit, watch } = useForm();
  const _getData = useCallback(async () => {
    try {
      const { data, total } = await api.getUsers(currentPage);
      setSize(total);
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }, [currentPage]);

  const _handleChangePage = newPage => {
    if (newPage !== currentPage) setCurrentPage(newPage);
  };

  useEffect(() => {
    _getData();
  }, [_getData, currentPage]);

  return (
    <>
      <Style.Table
        currentPage={currentPage}
        handleChangePage={_handleChangePage}
        dataSource={data}
        total={size}
        columns={columns}
      />
    </>
  );
}

const columns = [
  {
    title: 'ID',
    dataIndex: 'id',
    key: 'ID',
  },
  {
    title: 'Email',
    dataIndex: 'email',
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
    title: 'Created at',
    dataIndex: 'createdAt',
    key: 'createdAt',
    render: item => formatDate(item),
  },
  {
    title: 'Updated at',
    dataIndex: 'updatedAt',
    key: 'updatedAt',
    render: item => formatDate(item),
  },
];

export default User;
