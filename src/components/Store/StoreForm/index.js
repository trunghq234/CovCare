import {
  Button,
  Card,
  Col,
  Input,
  Row,
  TimePicker,
  Typography,
  Form,
  Checkbox,
  Modal,
  Result,
} from 'antd';
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
    <div>
      <Card>
        <Form form={form} layout="vertical" onFinish={onFinish}>
          <Row gutter={[48, 0]}>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="fullName"
                label="Họ tên"
                rules={[
                  {
                    required: true,
                    message: 'Vui lòng nhập họ tên!',
                  },
                ]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="storeName"
                label="Tên cửa hàng"
                rules={[{ required: true, message: 'Vui lòng nhập tên cửa hàng!' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={24} lg={24} md={24} sm={24} xs={24}>
              <ProvincePicker city={city} form={form} />
            </Col>
            <Col xl={6} lg={6} md={14} sm={24} xs={24}>
              <Form.Item
                name="timePicker"
                label="Thời gian"
                rules={[{ required: true, message: 'Vui lòng nhập chọn thời gian bán hàng!' }]}>
                <TimePicker.RangePicker style={{ height: '35px' }} size="small" format="HH:mm" />
              </Form.Item>
            </Col>
            <Col xl={18} lg={18} md={10} sm={24} xs={24}></Col>
            <Col xl={12} lg={12} md={12} sm={24} xs={24}>
              <Form.Item label="Ghi chú">
                <Input.TextArea />
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
