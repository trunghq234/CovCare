import { Col, Form, Input, Row, Select } from 'antd';
import React, { useState } from 'react';
import { LocationVN } from './LocationVN';

const { Option } = Select;

const ProvincePicker = props => {
  const [selectedDistrict, setSelectedDistrict] = useState();

  return (
    <Row gutter={[48, 0]}>
      <Col xl={16} lg={16} md={12} sm={14} xs={14}>
        <Form.Item label="Address" name="detailsAddress" rules={[{ required: true }]}>
          <Input placeholder="Details address" />
        </Form.Item>
      </Col>
      <Col xl={8} lg={8} md={8} sm={10} xs={10}>
        <Form.Item label="District" name="district" rules={[{ required: true }]}>
          <Select
            showSearch
            value={selectedDistrict}
            onChange={val => {
              setSelectedDistrict(val);
            }}>
            {LocationVN.map(item => (
              <Option key={item.key} value={item.key}>
                {item.quan}
              </Option>
            ))}
          </Select>
        </Form.Item>
      </Col>
    </Row>
  );
};

export default ProvincePicker;
