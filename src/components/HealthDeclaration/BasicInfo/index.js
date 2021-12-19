import { Row, Form, Input, Col, Select, DatePicker } from 'antd';
import TypingSelect from 'components/common/TypingSelect';
import React from 'react';
import country from 'constants/Country.json';
import { numberValidator } from 'utils/validator';
const { Option } = Select;

const BasicInfo = () => {
  return (
    <Row gutter={20}>
      <Col xs={24} md={12}>
        <Form.Item
          label="Họ tên"
          name="name"
          rules={[{ required: true, message: 'Bạn chưa nhập họ tên.' }]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col xs={24} md={12}>
        <Form.Item
          label="Số hộ chiếu / CMND / CCCD"
          name="idNumber"
          rules={[{ validator: numberValidator }]}>
          <Input style={{ width: '100%' }} />
        </Form.Item>
      </Col>
      <Col xs={24} md={8}>
        <Form.Item
          label="Năm sinh"
          name="dob"
          rules={[
            { required: true, message: 'Bạn chưa nhập họ tên.' },
            { validator: numberValidator },
          ]}>
          <DatePicker picker="year" placeholder="Chọn/nhập" />
        </Form.Item>
      </Col>
      <Col xs={24} md={8}>
        <Form.Item
          label="Giới tính"
          name="gender"
          rules={[{ required: true, message: 'Bạn chưa chọn giới tính.' }]}>
          <Select placeholder="Chọn">
            <Option value="male">Nam</Option>
            <Option value="female">Nữ</Option>
            <Option value="others">Khác</Option>
          </Select>
        </Form.Item>
      </Col>
      <Col xs={24} md={8}>
        <Form.Item
          label="Quốc tịch"
          valuePropName="option"
          name="nationality"
          initialValue="Viet Nam"
          rules={[{ required: true, message: 'Bạn chưa chọn quốc tịch' }]}>
          <TypingSelect placeholder="Chọn" defaultValue="Viet Nam" list={country} />
        </Form.Item>
      </Col>
    </Row>
  );
};

export default BasicInfo;
