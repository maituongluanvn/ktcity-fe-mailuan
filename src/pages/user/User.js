/* eslint-disable eqeqeq */
import React, { useState, useEffect, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button } from 'antd';

import { api } from 'Axios.js';
import * as Style from './style';
import { formatDate } from 'utils/formatDate';
import Select from 'antd/lib/select';

const { Option } = Select;

function User() {
  const [data, setData] = useState([]);
  const [size, setSize] = useState(5);
  const [currentPage, setCurrentPage] = useState(0);
  const [status, setStatus] = useState(0);
  const [createdAt, setCreatedAt] = useState('desc');
  const navigate = useNavigate();
  // const { register, handleSubmit, watch } = useForm();
  const _getData = useCallback(async () => {
    try {
      const { data, total } = await api.getUsers(
        currentPage,
        status,
        createdAt,
      );
      setSize(total);
      setData(data);
    } catch (err) {
      console.error(err);
    }
  }, [currentPage, status, createdAt]);

  const _handleChangePage = newPage => {
    if (newPage !== currentPage) setCurrentPage(newPage);
  };

  const handleChange = value => {
    setStatus(value);
    setCurrentPage(0);
  };

  const handleChangeCreateAt = value => {
    setCreatedAt(value);
    setCurrentPage(0);
  };

  const _onClickRow = record => {
    navigate('/detail', { state: record });
  };

  const _onClickSave = () => {
    navigate('/create');
  };

  useEffect(() => {
    _getData();
  }, [_getData, currentPage]);

  return (
    <>
      {/* filter status */}
      <span>Filter status : </span>
      <Select defaultValue={0} style={{ width: 120 }} onChange={handleChange}>
        <Option value='0'>0</Option>
        <Option value='1'>1</Option>
      </Select>
      {/* filter created at  */}
      <span>Filter created at : </span>
      <Select
        defaultValue={'Newest'}
        style={{ width: 120 }}
        onChange={handleChangeCreateAt}
      >
        <Option value='desc'>Newest</Option>
        <Option value='asc'>Lastest</Option>
      </Select>
      {/* button create */}
      <Button onClick={_onClickSave} type='primary'>
        Create new
      </Button>
      <Style.Table
        currentPage={currentPage}
        handleChangePage={_handleChangePage}
        dataSource={data}
        total={size}
        columns={columns}
        onRowClick={_onClickRow}
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
    filters: [
      {
        text: '0',
        value: '0',
      },
      {
        text: '1',
        value: '1',
      },
      {
        text: '2',
        value: '2',
      },
    ],
    onFilter: (value, record) => {
      if (record.status == value) {
        return record;
      }
    },
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
