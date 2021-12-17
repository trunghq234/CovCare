import { Card, Row, Form, Col, Input, message, Button } from 'antd';
import Category from 'components/SupportRequest/Category';
import ProvincePickerWithWard from 'components/HealthDeclaration/ProvincePickerWithWard';
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
          <ProvincePickerWithWard form={form} />
          <h4 className={styles.title}>Yêu cầu hỗ trợ</h4>
          <Row gutter={[20, 40]}>
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
          <Col xs={24} sm={{ span: 8, offset: 8 }} md={{ span: 6, offset: 9 }}>
            <Form.Item>
              <Button type="primary" htmlType="submit" block className={styles['btn-submit']}>
                Gửi yêu cầu
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Card>
    </div>
  );
};

export default SupportRequest;
