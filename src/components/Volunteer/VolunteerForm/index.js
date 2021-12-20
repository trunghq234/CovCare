import {
  Button,
  Card,
  Checkbox,
  Col,
  DatePicker,
  Form,
  Input,
  Modal,
  Result,
  Row,
  Select,
} from 'antd';
import React from 'react';
import styles from './index.module.less';

const { Option } = Select;

export default function VolunteerForm() {
  const [form] = Form.useForm();
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
            <Col xl={10} lg={12} md={12} sm={24} xs={24}>
              <Form.Item
                name="fullName"
                label="Họ tên"
                rules={[{ required: true, message: 'Vui lòng nhập họ tên!' }]}>
                <Input placeholder="Nhập họ tên" />
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name="email" label="Email">
                <Input type="email" placeholder="Nhập email" />
              </Form.Item>
            </Col>
            <Col xl={4} lg={4} md={24} sm={24} xs={24}>
              <Form.Item
                name="yearOfBirth"
                label="Năm sinh"
                rules={[{ required: true, message: 'Vui lòng nhập năm sinh!' }]}>
                <DatePicker
                  className={styles.yearPicker}
                  picker="year"
                  size="small"
                  placeholder="Chọn"
                />
              </Form.Item>
            </Col>
            <Col xl={10} lg={10} md={12} sm={12} xs={24}>
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
            <Col xl={10} lg={10} md={12} sm={12} xs={24}>
              <Form.Item
                name="identification "
                label="CCCD/CMND"
                rules={[{ required: true, message: 'Vui lòng nhập CCCD/CMND!' }]}
                onKeyPress={event => {
                  if (!/[0-9]/.test(event.key)) {
                    event.preventDefault();
                  }
                }}>
                <Input placeholder="Nhập CCCD/CMND" />
              </Form.Item>
            </Col>

            <Col xl={10} lg={6} md={12} sm={12} xs={24}>
              <Form.Item
                label="Tôi đăng ký nhóm"
                name="selectGroup"
                rules={[{ required: true, message: 'Vui lòng chọn nhóm!' }]}>
                <Select placeholder="Chọn nhóm">
                  <Option value="1">TNV Y Tế</Option>
                  <Option value="2">Bác Sỹ Tư Vấn</Option>
                  <Option value="3">Trợ Lý Vận Hành</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={12} sm={12} xs={24}>
              <Form.Item label="Chuyên khoa" name="specialize">
                <Input placeholder="Nhập chuyên khoa" />
              </Form.Item>
            </Col>
            <Col xl={4} lg={6} md={12} sm={12} xs={24}>
              <Form.Item label="Kinh nghiệm" name="experience">
                <Select placeholder="Chọn">
                  <Option value="1">0 - 1 năm</Option>
                  <Option value="2">1 - 2 năm</Option>
                  <Option value="3">2 - 3 năm</Option>
                  <Option value="4">3 - 4 năm</Option>
                  <Option value="5">4+ năm</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={12} sm={12} xs={24}>
              <Form.Item label="Nơi học tập, công tác" name="workLocation">
                <Input placeholder="Nhập nơi học tập, công tác" />
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={24} sm={24} xs={24}>
              <Form.Item label="Ghi chú" name="note">
                <Input.TextArea placeholder="Ghi chú tại đây" />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Row gutter={[0, 16]} className={styles.wrapper}>
                <Col span={24} className={styles.content}>
                  Không sử dụng thông tin đã được tiếp cận và xử lý phục vụ cho các mục đích khác
                  ngoài nội dung công việc được giao tại mạng lưới “Thầy thuốc Đồng hành”;
                </Col>
                <Col span={24} className={styles.content}>
                  Không sao chép, cung cấp một phần hay toàn bộ thông tin đã được tiếp cận và xử lý
                  cho bất kỳ bên thứ ba nào khi chưa có sự chấp thuận của mạng lưới “Thầy thuốc đồng
                  hành”;
                </Col>
                <Col span={24} className={styles.content}>
                  Bàn giao toàn bộ thông tin và không giữ lại bất cứ bản sao nào khi kết thúc thời
                  gian làm việc tại mạng lưới “Thầy thuốc đồng hành”.
                </Col>
                <Col span={24} className={styles.content}>
                  Tôi xin cam đoan thực hiện đúng những nội dung trên và chịu trách nhiệm trước pháp
                  luật nếu vi phạm.
                </Col>
              </Row>
            </Col>
            <Col span={24}>
              <Form.Item
                name="checkbox"
                rules={[
                  { required: true, message: 'Vui lòng chấp nhận những điều khoản về phòng dịch!' },
                ]}>
                <Checkbox.Group options={option} />
              </Form.Item>
            </Col>

            <Col xl={24} xs={24}>
              <Button className={styles.button} type="primary" htmlType="submit">
                Gửi
              </Button>
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
        <Result status="success" title="Đăng ký tham gia tình nguyện thành công" />
      </Modal>
    </div>
  );
}
