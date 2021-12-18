import { Button, Card, Col, Input, Row, TimePicker, Typography, Form, Checkbox } from 'antd';
import React from 'react';
import ProvincePicker from '../ProvincePicker';
import styles from './index.module.less';

export default function StoreForm() {
  const [form] = Form.useForm();
  const validateMessages = {
    required: 'Vui lòng nhập ${label}!',
    // ...
  };

  const onFinish = data => {
    console.log(data);
  };

  return (
    <div>
      <Card>
        <Form form={form} validateMessages={validateMessages} layout="vertical" onFinish={onFinish}>
          <Row gutter={[48, 0]}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name="fullName" label="Họ tên" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name="fullName" label="Tên cửa hàng" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={18} lg={18} md={24} sm={24} xs={24}>
              <ProvincePicker />
            </Col>
            <Col xl={6} lg={6} md={14} sm={24} xs={24}>
              <Form.Item name="timePicker" label="Thời gian" rules={[{ required: true }]}>
                <TimePicker.RangePicker style={{ height: '35px' }} size="small" format="HH:mm" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Ghi chú">
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name="confirm"
                label="Tôi ý thức được tính chất và tầm quan trọng của những thông tin này và cam kết"
                rules={[{ required: true }]}>
                <div className={styles.content}>
                  <Typography.Paragraph className={styles.para}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla bibendum
                    scelerisque metus id vulputate. Aenean non nisi ac metus blandit convallis in ac
                    massa. Nulla iaculis, nibh ut accumsan dapibus, purus dolor condimentum dui, vel
                    maximus leo ligula sit amet velit. Nunc dictum risus elit, in viverra augue
                    auctor in. Fusce congue, diam in scelerisque hendrerit, lectus nisi euismod
                    nibh, ac venenatis nisi leo in mi. Cras diam purus, pharetra eu orci quis,
                    gravida efficitur nibh. Aenean quam enim, porttitor consectetur ultricies at,
                    scelerisque at justo. Nulla volutpat lacinia rutrum. Nullam ac diam libero. Nam
                    fringilla diam et enim interdum, a venenatis dolor fermentum. Pellentesque
                    facilisis nisi faucibus volutpat suscipit. Ut consequat ex at tellus porta
                    ullamcorper.
                  </Typography.Paragraph>
                  <Row gutter={[0, 16]}>
                    <Col span={24}>
                      <Checkbox>
                        <Typography.Paragraph className={styles.para}>
                          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        </Typography.Paragraph>
                      </Checkbox>
                    </Col>
                  </Row>
                </div>
              </Form.Item>
            </Col>

            <Col span={24}>
              <Form.Item>
                <Button className={styles.button} type="primary" htmlType="submit">
                  Gửi
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
    </div>
  );
}
