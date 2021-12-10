import { Row, Form, Col, Input } from 'antd';
import React from 'react';
import { numberValidator } from 'utils/validator';
import styles from './index.module.less';
import ProvincePickerWithWard from '../ProvincePickerWithWard';

const ContactInVietnam = ({ form }) => {
  return (
    <Col span={24}>
      <Row className={styles['title-contact']}>Địa chỉ liên lạc tại Việt Nam</Row>
      <ProvincePickerWithWard form={form} />
      <Row gutter={40}>
        <Col span={12}>
          <Form.Item
            label="Điện thoại"
            name="phoneNumber"
            rules={[
              { required: true, message: 'Bạn chưa nhập số điện thoại' },
              { validator: numberValidator },
            ]}>
            <Input placeholder="Nhập số điện thoại" />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item
            label="Email"
            name="email"
            rules={[{ type: 'email', message: 'Email không đúng định dạng' }]}>
            <Input placeholder="Ví dụ: covcare@gmail.com" />
          </Form.Item>
        </Col>
      </Row>
    </Col>
  );
};

export default ContactInVietnam;
