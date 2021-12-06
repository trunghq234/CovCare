import { Row, Form, Input, Col, Select } from 'antd';
import React from 'react';
import { numberValidator } from 'utils/validator';
const { Option } = Select;

const BasicInfo = () => {
  return (
    <Row gutter={20}>
      <Col span={12}>
        <Form.Item
          label="Họ tên"
          name="name"
          rules={[{ required: true, message: 'Bạn chưa nhập họ tên.' }]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={12}>
        <Form.Item
          label="Số hộ chiếu / CMND / CCCD"
          name="idNumber"
          rules={[{ validator: numberValidator }]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={9}>
        <Form.Item
          label="Năm sinh"
          name="dob"
          rules={[
            { required: true, message: 'Bạn chưa nhập họ tên.' },
            { validator: numberValidator },
          ]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col span={6}>
        <Form.Item
          label="Gender"
          name="gender"
          rules={[{ required: true, message: 'Bạn chưa chọn giới tính.' }]}>
          <Select placeholder="Chọn">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
            <Option value="others">Khác</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col span={9}>
        <Form.Item label="Quốc tịch" name="nationality" rules={[{ required: true }]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default BasicInfo;
