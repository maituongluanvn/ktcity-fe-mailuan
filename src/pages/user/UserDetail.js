import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Row, Col, Button } from 'antd';
import { useForm } from 'react-hook-form';

import Input from 'antd/lib/input/Input';

import * as Style from './style';

function UserDetail() {
  const { state } = useLocation();
  const { register, watch, setValue } = useForm();

  const onSubmit = useCallback(() => {
    console.log(watch());
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
            />
          </Col>
        ))}
        <Button onClick={onSubmit} type='primary'>
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
  },
];

export default UserDetail;
