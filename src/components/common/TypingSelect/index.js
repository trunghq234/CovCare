import React from 'react';
import { Select } from 'antd';

const { Option } = Select;

const TypingSelect = ({ value = '', onChange, ...props }) => {
  const handleChange = value => {
    if (onChange) {
      onChange(value);
    }
  };

  const renderOptions = dataList => {
    if (dataList.length) {
      return dataList.map(data => {
        return (
          <Option key={data['name']} value={data['name']}>
            {data['name']}
          </Option>
        );
      });
    }
    return null;
  };

  let optionRendered = renderOptions(props.list);

  return (
    <Select
      showSearch
      placeholder={props.placeholder}
      defaultValue={props.defaultValue}
      value={value}
      style={{ width: props.width || '100%' }}
      onChange={handleChange}>
      {optionRendered}
    </Select>
  );
};

export default TypingSelect;
