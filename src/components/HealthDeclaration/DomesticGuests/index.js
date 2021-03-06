import React from 'react';
import { Button, Form, Checkbox, Input, Image, Row, Col, notification } from 'antd';
import BasicInfo from '../BasicInfo';
import ContactInVietnam from '../ContactInVietnam';
import StatusWithin14Days from '../StatusWithin14Days';
import styles from './index.module.less';
import captcha from 'assets/images/captcha.png';

const DomesticGuests = () => {
  const handleSubmit = () => {
    const { captcha } = form.getFieldsValue();
    if (captcha === 'W68HP') {
      notification.success({
        message: 'Bạn đã gửi thành công!',
      });
      form.resetFields();
    } else {
      notification.warning({
        message: 'Mã bảo mật không đúng',
      });
    }
  };
  const [form] = Form.useForm();
  return (
    <Form layout="vertical" form={form} onFinish={handleSubmit}>
      <Form.Item>
        <Checkbox style={{ fontWeight: '600' }}>Khai hộ</Checkbox>
      </Form.Item>
      <BasicInfo />
      <ContactInVietnam form={form} />
      <StatusWithin14Days />
      <Row gutter={20}>
        <Col xs={12} md={10} lg={5}>
          <Form.Item
            label="Mã bảo mật"
            name="captcha"
            rules={[{ required: true, message: 'Bạn chưa nhập mã bảo mật' }]}>
            <Input placeholder="Nhập mã bảo mật tại đây" />
          </Form.Item>
        </Col>
        <Col xs={8} md={6}>
          <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
            <Image src={captcha} width={100} height={34} />
          </div>
        </Col>
      </Row>
      <div style={{ color: '#f00', margin: '20px 0 30px' }}>
        Dữ liệu bạn cung cấp hoàn toàn bảo mật và chỉ phục vụ cho việc phòng chống dịch, thuộc quản
        lý của Ban chỉ đạo quốc gia về Phòng chống dịch Covid-19. Khi bạn nhấn nút "Gửi" là bạn đã
        hiểu và đồng ý.
      </div>
      <Col
        xs={{ span: 14, offset: 5 }}
        sm={{ span: 8, offset: 8 }}
        md={{ span: 8, offset: 8 }}
        lg={{ span: 6, offset: 9 }}
        xl={{ span: 4, offset: 10 }}>
        <Form.Item>
          <Button type="primary" htmlType="submit" block className={styles['btn-submit']}>
            Gửi tờ khai
          </Button>
        </Form.Item>
      </Col>
    </Form>
  );
};

export default DomesticGuests;
