import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input/Input';
import Switch from 'antd/lib/switch';

function InputCustom({
  dataIndex,
  register,
  label,
  placeholder,
  defaultValue,
  setValue,
  // value,
  watch,
  disable,
  type,
  required,
}) {
  const _handleChange = e => {
    e.persist();
    setValue(dataIndex, e?.target?.value || null);
  };

  const _onChangeSwitch = checked => {
    const isTrue = checked ? 1 : 0;
    setValue(dataIndex, isTrue);
  };

  useEffect(() => {
    setValue(dataIndex, defaultValue || null);
  }, [dataIndex, defaultValue, register, setValue]);

  return (
    <>
      <span>{label} : </span>
      {type === 'input' ? (
        <Input
          {...register(dataIndex)}
          name={dataIndex}
          defaultValue={defaultValue}
          value={watch(dataIndex)}
          style={style}
          placeholder={placeholder}
          onChange={_handleChange}
          disabled={disable}
        />
      ) : (
        <Switch
          {...register(dataIndex)}
          name={dataIndex}
          defaultChecked={defaultValue}
          onChange={_onChangeSwitch}
          value={watch(dataIndex)}
        />
      )}
    </>
  );
}

InputCustom.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  dataIndex: PropTypes.string,
  type: PropTypes.string,
  disable: PropTypes.bool,
  register: PropTypes.any,
  value: PropTypes.any,
  setValue: PropTypes.any,
  watch: PropTypes.any,
  required: PropTypes.bool,
};

InputCustom.defaultProps = {
  label: '',
  placeholder: '',
  defaultValue: '',
  disable: false,
  required: false,
  type: 'input',
};

const style = {
  width: '30%',
};

export default InputCustom;
