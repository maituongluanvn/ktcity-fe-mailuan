import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { notiCreateSuccess, notiError } from 'utils/notification';
import { useForm } from 'react-hook-form';

import { api } from 'Axios.js';

import * as Style from './style';

function UserDetail() {
  const { state } = useLocation();
  const { register, watch, setValue } = useForm();

  const _handleValidate = body => {
    const { email, fullName } = body;
    // validate email
    // require field
    if (
      email === null ||
      fullName === null ||
      email.trim() === '' ||
      fullName.trim() === ''
    ) {
      notiError('Email or full name is require');
      return false;
    }
    const regexEmail = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if (!regexEmail.test(email)) {
      // email is not validate
      notiError('Email is not validate');
      return false;
    }
    return true;
  };

  const _onSubmit = useCallback(async () => {
    const body = {
      ...watch(),
      deleted: watch('deleted') === '0' || !watch('deleted') ? 0 : 1,
      status: watch('status') === '0' || !watch('status') ? 0 : 1,
    };
    const isValidate = _handleValidate(body);
    if (!isValidate) {
      return;
    }
    try {
      await api.createUser(body);
      notiCreateSuccess();
    } catch (err) {
      notiError('Something wrong !!');
      console.error(err);
    }
  }, [watch]);

  return (
    <>
      <Row gutter={[30, 10]}>
        {fields.map((item, index) => (
          <Col key={index} span={24}>
            <Style.Input
              register={register}
              setValue={setValue}
              watch={watch}
              label={item.label}
              placeholder={item.placeholder}
              defaultValue={state?.[item?.dataIndex] || ''}
              dataIndex={item.dataIndex}
              disable={item.disable}
              type={item.type}
              require={item.require}
            />
          </Col>
        ))}

        <Button onClick={_onSubmit} type='primary'>
          Save
        </Button>
      </Row>
    </>
  );
}

UserDetail.propTypes = {
  state: PropTypes.any,
};

UserDetail.defaultProps = {};

const fields = [
  {
    label: 'Email',
    name: 'email',
    dataIndex: 'email',
    placeholder: 'Email',
    require: true,
  },
  {
    label: 'Username',
    name: 'userName',
    dataIndex: 'userName',
    placeholder: 'User name',
  },
  {
    label: 'Full name',
    name: 'fullName',
    dataIndex: 'fullName',
    placeholder: 'Full name',
    require: true,
  },
  {
    label: 'Status',
    name: 'status',
    dataIndex: 'status',
    type: 'switch',
  },
];

export default UserDetail;
