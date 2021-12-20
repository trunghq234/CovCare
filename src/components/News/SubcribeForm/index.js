import { Form, Input } from 'antd';
import React from 'react';

const SubcribeForm = ({ form }) => {
  return (
    <Form form={form}>
      <Form.Item
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Vui lòng nhập email!', type: 'email' }]}>
        <Input />
      </Form.Item>
    </Form>
  );
};

export default SubcribeForm;
