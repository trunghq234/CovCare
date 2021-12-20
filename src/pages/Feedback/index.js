import { Button, Card, Checkbox, Col, Form, Input, Modal, Result, Row, Select } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';
const { Option } = Select;
export default function Feedback() {
  const [form] = Form.useForm();
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
  const options = [
    { label: 'Rất tốt', value: 'Rất tốt' },
    { label: 'Chưa tốt', value: 'Chưa tốt' },
    { label: 'Khá', value: 'Khá' },
  ];
  return (
    <div className="container">
      <div className="banner-sm" style={{ marginTop: '60px' }}>
        <Row gutter={[20, 10]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h1 className="title">Phản ánh</h1>
            <p>Phản ánh thông tin về tiêm ngừa dịch bệnh.</p>
          </Col>
        </Row>
      </div>
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
                  label="Giới tính"
                  name="gender"
                  rules={[{ required: true, message: 'Bạn chưa chọn giới tính.' }]}>
                  <Select placeholder="Giới tính">
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                    <Option value="others">Khác</Option>
                  </Select>
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  label="CMND/CCCD/HC"
                  name="idNumber"
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  rules={[{ required: true, message: 'Vui lòng nhập CMND/CCCD/HC!' }]}>
                  <Input placeholder="CMND/CCCD/HC" />
                </Form.Item>
              </Col>
              <Col xl={12} lg={12} md={12} sm={24} xs={24}>
                <Form.Item
                  name="voting"
                  label="Đánh giá"
                  rules={[{ required: true, message: 'Vui lòng chọn đánh giá!' }]}>
                  <Checkbox.Group options={options} />
                </Form.Item>
              </Col>

              <Col span={24}>
                <Form.Item label="Mô tả" name="note">
                  <Input.TextArea placeholder="Mô tả về phản ánh" />
                </Form.Item>
              </Col>

              <Col span={24} style={{ marginBottom: '16px' }}>
                <Row gutter={[0, 16]} className={styles.wrapper}>
                  <Col span={24} className={styles.content}>
                    * Không sử dụng thông tin đã được tiếp cận và xử lý phục vụ cho các mục đích
                    khác ngoài nội dung công việc được giao tại mạng lưới;
                  </Col>
                  <Col span={24} className={styles.content}>
                    * Không sao chép, cung cấp một phần hay toàn bộ thông tin đã được tiếp cận và xử
                    lý cho bất kỳ bên thứ ba nào khi chưa có sự chấp thuận của mạng lưới;
                  </Col>
                  <Col span={24} className={styles.content}>
                    * Bàn giao toàn bộ thông tin và không giữ lại bất cứ bản sao nào khi kết thúc
                    thời gian làm việc tại mạng lưới.
                  </Col>
                  <Col span={24} className={styles.content}>
                    * Tôi xin cam đoan thực hiện đúng những nội dung trên và chịu trách nhiệm trước
                    pháp luật nếu vi phạm.
                  </Col>
                </Row>
              </Col>
              <Col xl={8} lg={8} md={8} sm={24} xs={24} span={24}>
                <Form.Item>
                  <Button size="large" block type="primary" htmlType="submit">
                    Gửi phản ánh
                  </Button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
        </Card>
        <Modal title="Thông báo" visible={isModalVisible} onCancel={handleOk} footer={null}>
          <Result
            status="success"
            title="Gửi phản ánh thành công!"
            extra={[
              <Button key="submit" type="primary" size="large" onClick={handleOk}>
                <Link to="/home">Trang chủ</Link>
              </Button>,
            ]}
          />
        </Modal>
      </div>
    </div>
  );
}
