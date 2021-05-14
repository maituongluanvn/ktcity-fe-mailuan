import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import Input from 'antd/lib/input/Input';

function InputCustom({
  dataIndex,
  register,
  label,
  placeholder,
  defaultValue,
  setValue,
  // value,
  watch,
}) {
  const _handleChange = e => {
    e.persist();
    setValue(dataIndex, e?.target?.value || null);
  };

  useEffect(() => {
    setValue(dataIndex, defaultValue);
  }, [dataIndex, defaultValue, register, setValue]);

  return (
    <>
      <span>{label} : </span>
      <Input
        {...register(dataIndex)}
        name={dataIndex}
        defaultValue={defaultValue}
        value={watch(dataIndex)}
        style={style}
        placeholder={placeholder}
        onChange={_handleChange}
      />
    </>
  );
}

InputCustom.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  defaultValue: PropTypes.string,
  dataIndex: PropTypes.string,
  register: PropTypes.any,
  value: PropTypes.any,
  setValue: PropTypes.any,
  watch: PropTypes.any,
};

InputCustom.defaultProps = {
  label: '',
  placeholder: '',
  defaultValue: '',
};

const style = {
  width: '30%',
};

export default InputCustom;
