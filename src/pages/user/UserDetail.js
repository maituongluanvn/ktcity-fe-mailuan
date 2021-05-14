import React, { useCallback } from 'react';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { Row, Col, Button, Switch } from 'antd';
import { notiSuccess } from 'utils/notification';
import { useForm } from 'react-hook-form';

import { api } from 'Axios.js';

import * as Style from './style';

function UserDetail() {
  const { state } = useLocation();
  const { register, watch, setValue } = useForm();
  console.log(state);
  const _onSubmit = useCallback(async () => {
    try {
      const body = { ...watch(), deleted: watch('deleted') === '0' ? 0 : 1 };
      const { id } = state;
      //delete email
      delete body.email;
      console.log(body);

      await api.updateUser(id, body);
      notiSuccess();
    } catch (err) {
      console.error(err);
    }
  }, [state, watch]);

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
    disable: true,
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
  {
    label: 'Deleted',
    name: 'deleted',
    dataIndex: 'deleted',
    type: 'switch',
  },
];

export default UserDetail;
