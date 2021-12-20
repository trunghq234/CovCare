import { Button, Card, Checkbox, Col, Form, Input, Modal, Result, Row, TimePicker } from 'antd';
import React from 'react';
import ProvincePicker from '../ProvincePicker';
import styles from './index.module.less';

export default function StoreForm() {
  const [form] = Form.useForm();
  const [city, setCity] = React.useState();
  const option = [
    {
      label: 'Tôi đồng ý với những điều khoản phòng dịch 5K!',
      value: 'rule',
    },
  ];
  const [isModalVisible, setIsModalVisible] = React.useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

  const handleOk = () => {
    setIsModalVisible(false);
  };

  const onFinish = data => {
    showModal();
    form.resetFields();
  };

  return (
    <div id="form" style={{ marginTop: '-120px' }}>
      <Card>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[20, 0]} justify="center">
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="fullName"
                label="Họ tên"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}>
                <Input placeholder="Nhập họ tên" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="storeName"
                label="Tên cửa hàng"
                rules={[{ required: true, message: 'Vui lòng nhập tên cửa hàng!' }]}>
                <Input placeholder="Nhập tên cửa hàng" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="phoneNumber"
                label="Số điện thoại"
                rules={[{ required: true, message: 'Vui lòng nhập số điện thoại!' }]}
                onKeyPress={event => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}>
                <Input type="text" maxLength="10" placeholder="Nhập số điện thoại" />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="timePicker"
                label="Thời gian mở cửa"
                rules={[{ required: true, message: 'Vui lòng nhập chọn thời gian bán hàng!' }]}>
                <TimePicker.RangePicker
                  style={{ height: '35px' }}
                  size="small"
                  format="HH:mm"
                  placeholder={['Giờ mở cửa', 'Giờ đóng cửa']}
                />
              </Form.Item>
            </Col>
            <Col span={24}>
              <ProvincePicker city={city} form={form} />
            </Col>

            <Col span={24}>
              <Form.Item label="Ghi chú" name="note">
                <Input.TextArea placeholder="Chú thích tại đây" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <div className={styles.content}>
                <Form.Item
                  name="checkbox"
                  rules={[
                    {
                      required: true,
                      message: 'Vui lòng chấp nhận những điều khoản về phòng dịch!',
                    },
                  ]}>
                  <Checkbox.Group options={option} />
                </Form.Item>
              </div>
            </Col>
            <Col xl={8} lg={8} md={8} sm={24} xs={24} span={24}>
              <Form.Item>
                <Button size="large" block type="primary" htmlType="submit">
                  Gửi yêu cầu mở cửa hàng
                </Button>
              </Form.Item>
            </Col>
          </Row>
        </Form>
      </Card>
      <Modal
        title="Thông báo"
        visible={isModalVisible}
        onOk={handleOk}
        footer={[
          <Button key="submit" type="primary" onClick={handleOk} style={{ width: '50px' }}>
            Ok
          </Button>,
        ]}>
        <Result status="success" title="Đăng ký cửa hàng thành công!" />
      </Modal>
    </div>
  );
}
