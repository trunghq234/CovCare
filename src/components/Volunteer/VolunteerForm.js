import { Card, Col, DatePicker, Input, Row, Form, Select, Checkbox, Button } from 'antd';
import React from 'react';
import styles from './index.module.less';

const { Option } = Select;

export default function VolunteerForm() {
  return (
    <div>
      <Card>
        <Form layout="vertical" requiredMark={true}>
          <Row gutter={[48, 0]}>
            <Col xl={10} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name="fullName" label="Họ tên" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={12} sm={24} xs={24}>
              <Form.Item name="email" label="Email" rules={[{ required: true, type: 'email' }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={4} lg={4} md={24} sm={24} xs={24}>
              <Form.Item name="yearOfBirth" label="Năm sinh" rules={[{ required: true }]}>
                <DatePicker className={styles.yearPicker} picker="year" size="small" />
              </Form.Item>
            </Col>
            <Col xl={10} lg={10} md={12} sm={12} xs={24}>
              <Form.Item name="phoneNumber" label="Số điện thoại" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>
            <Col xl={10} lg={10} md={12} sm={12} xs={24}>
              <Form.Item name="identification " label="CCCD/CMND" rules={[{ required: true }]}>
                <Input />
              </Form.Item>
            </Col>

            <Col xl={10} lg={6} md={12} sm={12} xs={24}>
              <Form.Item label="Tôi đăng ký nhóm" rules={[{ required: true }]}>
                <Select>
                  <Option value="1">TNV Y Tế</Option>
                  <Option value="2">Bác Sỹ Tư Vấn</Option>
                  <Option value="3">Trợ Lý Vận Hành</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={12} sm={12} xs={24}>
              <Form.Item label="Chuyên khoa">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={4} lg={6} md={12} sm={12} xs={24}>
              <Form.Item label="Số năm kinh nghiệm">
                <Select>
                  <Option value="1">0 - 1 năm</Option>
                  <Option value="2">1 - 2 năm</Option>
                  <Option value="3">2 - 3 năm</Option>
                  <Option value="4">3 - 4 năm</Option>
                  <Option value="5">4+ năm</Option>
                </Select>
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={12} sm={12} xs={24}>
              <Form.Item label="Nơi học tập, công tác">
                <Input />
              </Form.Item>
            </Col>
            <Col xl={10} lg={12} md={24} sm={24} xs={24}>
              <Form.Item label="Ghi chú">
                <Input.TextArea />
              </Form.Item>
            </Col>
            <Col span={24}>
              <Form.Item
                name=""
                label="Tôi ý thức được tính chất và tầm quan trọng của những thông tin này và cam kết: "
                rules={[{ required: true }]}>
                <Row gutter={[0, 16]}>
                  <Col span={24}>
                    <Checkbox>
                      Không sử dụng thông tin đã được tiếp cận và xử lý phục vụ cho các mục đích
                      khác ngoài nội dung công việc được giao tại mạng lưới “Thầy thuốc Đồng hành”;
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox>
                      Không sao chép, cung cấp một phần hay toàn bộ thông tin đã được tiếp cận và xử
                      lý cho bất kỳ bên thứ ba nào khi chưa có sự chấp thuận của mạng lưới “Thầy
                      thuốc đồng hành”;
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox>
                      Bàn giao toàn bộ thông tin và không giữ lại bất cứ bản sao nào khi kết thúc
                      thời gian làm việc tại mạng lưới “Thầy thuốc đồng hành”.
                    </Checkbox>
                  </Col>
                  <Col span={24}>
                    <Checkbox>
                      Tôi xin cam đoan thực hiện đúng những nội dung trên và chịu trách nhiệm trước
                      pháp luật nếu vi phạm.
                    </Checkbox>
                  </Col>
                </Row>
              </Form.Item>
            </Col>

            <Col xl={24}>
              <Form.Item>
                <Button className={styles.button} type="primary">
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
