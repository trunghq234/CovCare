import { Card, Row, Form, Col, Input, message, Button } from 'antd';
import ProvincePicker from 'components/common/ProvincePicker';
import Category from 'components/SupportRequest/Category';
import React from 'react';
import styles from './index.module.less';
const { TextArea } = Input;

const SupportRequest = () => {
  const [form] = Form.useForm();

  const handleSubmitForm = () => {
    message.success('Bạn đã gửi yêu cầu thành công!');
    form.resetFields();
  };
  return (
    <div className={styles.container}>
      <h3>Gửi Yêu Cầu Hỗ Trợ</h3>
      <Card>
        <Form layout="vertical" form={form} onFinish={handleSubmitForm}>
          <h4 className={styles.title}>Thông tin liên hệ</h4>
          <Row>
            <Col span={24}>
              <Form.Item
                label="Họ và tên"
                name="name"
                rules={[{ required: true, message: 'Bạn chưa nhập họ tên' }]}>
                <Input placeholder="Nhập họ tên" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại' }]}>
                <Input placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>
          </Row>
          <ProvincePicker form={form} />
          <h4 className={styles.title}>Yêu cầu hỗ trợ</h4>
          <Row>
            <Col span={24}>
              <Category />
            </Col>
            <Col span={24}>
              <Form.Item
                label="Chi tiết cần hỗ trợ"
                name="details"
                rules={[{ required: true, message: 'Bạn cần phải nhập chi tiết' }]}>
                <TextArea placeholder="Càng chi tiết càng tốt" style={{ height: '100px' }} />
              </Form.Item>
            </Col>
          </Row>
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
