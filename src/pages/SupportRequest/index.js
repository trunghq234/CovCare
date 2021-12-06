import { Card, Row, Form, Input, Divider, Radio, Space, Button } from 'antd';
import ProvincePicker from 'components/common/ProvincePicker';
import Category from 'components/SupportRequest/Category';
import React from 'react';
import styles from './index.module.less';
const { TextArea } = Input;

const SupportRequest = () => {
  const [form] = Form.useForm();

  return (
    <div className={styles.container}>
      <h3>Gửi Yêu Cầu Hỗ Trợ</h3>
      <Card>
        <Form layout="vertical" form={form}>
          <h4 className={styles.title}>Thông tin liên hệ</h4>
          <Form.Item
            label="Họ và tên"
            name="name"
            rules={[{ required: true, message: 'Bạn chưa nhập họ tên' }]}>
            <Input></Input>
          </Form.Item>
          <Form.Item
            label="Số điện thoại"
            name="phoneNumber"
            rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại' }]}>
            <Input></Input>
          </Form.Item>
          <ProvincePicker form={form} />
          <h4 className={styles.title}>Yêu cầu hỗ trợ</h4>
          <Category />
          <Form.Item
            label="Chi tiết cần hỗ trợ"
            name="details"
            rules={[{ required: true, message: 'Bạn cần phải nhập chi tiết' }]}>
            <TextArea placeholder="Càng chi tiết càng tốt" style={{ height: '100px' }} />
          </Form.Item>
          <Form.Item>
            <div style={{ display: 'flex' }}>
              <Button type="primary" htmlType="submit" className={styles['btn-submit']}>
                Gửi yêu cầu
              </Button>
            </div>
          </Form.Item>
        </Form>
      </Card>
    </div>
  );
};

export default SupportRequest;
