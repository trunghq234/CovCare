import { ArrowRightOutlined } from '@ant-design/icons';
import { Button, Card, Col, Form, Input, Modal, Result, Row } from 'antd';
import ProvincePickerWithWard from 'components/HealthDeclaration/ProvincePickerWithWard';
import Category from 'components/SupportRequest/Category';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';

const { TextArea } = Input;

const SupportRequest = () => {
  const [form] = Form.useForm();
  const [visible, setVisible] = useState(false);

  const handleSubmitForm = () => {
    form.validateFields().then(values => {
      setVisible(true);
      form.resetFields();
    });
  };
  return (
    <div className="container">
      <div className="banner-sm" style={{ marginTop: '60px' }}>
        <Row gutter={[20, 10]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h1 className="title">Gửi yêu cầu hỗ trợ</h1>
            <p>Cộng đồng xung quanh bạn sẽ giúp đỡ những khó khăn của bạn.</p>
          </Col>
        </Row>
      </div>
      <Card style={{ marginTop: '-120px' }}>
        <Form layout="vertical" form={form}>
          <h4>Thông tin liên hệ</h4>
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
                onKeyPress={event => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}
                label="Số điện thoại"
                name="phoneNumber"
                rules={[{ required: true, message: 'Bạn chưa nhập số điện thoại' }]}>
                <Input type="text" placeholder="Số điện thoại" minLength={10} maxLength={10} />
              </Form.Item>
            </Col>
          </Row>
          <ProvincePickerWithWard form={form} />
          <h4>Yêu cầu hỗ trợ</h4>
          <Row gutter={[20, 10]}>
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
              <Button size="large" type="primary" block onClick={handleSubmitForm}>
                Gửi yêu cầu
              </Button>
            </Form.Item>
          </Col>
        </Form>
      </Card>
      <Modal title="Yêu cầu hỗ trợ thành công" centered footer={null} visible={visible}>
        <Result
          status="success"
          title="Bạn đã gửi yêu cầu thành công!"
          subTitle="Gói hỗ trợ sẽ được giao trong vòng 2-3 ngày. Bạn vui lòng giữ liên lạc để quá trình giao chuyển thuận tiện hơn."
          extra={[
            <Button size="large" type="primary" key="home">
              <NavLink to="/home">Trang chủ</NavLink>
            </Button>,
          ]}
        />
      </Modal>
    </div>
  );
};

export default SupportRequest;
