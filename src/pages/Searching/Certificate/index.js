import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, DatePicker, Form, Input, Row, Select } from 'antd';
import Result from 'components/Result';
import React, { useState } from 'react';
import styles from './index.module.less';
const { Option } = Select;

const Certificate = props => {
  const [form] = Form.useForm();
  const dateFormat = 'DD/MM/YYYY';
  const handleSubmit = () => {
    setVisible('block');
  };
  const handleReset = () => {
    form.resetFields();
    setVisible('none');
  };
  const [visible, setVisible] = useState('none');
  const columns = [
    {
      title: 'Mũi số',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
    },
    {
      title: 'Thời gian tiêm',
      dataIndex: 'datetime',
      key: 'datetime',
      align: 'center',
    },
    {
      title: 'Tên vắc xin',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Số lô',
      dataIndex: 'lot',
      key: 'lot',
      align: 'center',
    },
    {
      title: 'Nơi niêm',
      dataIndex: 'location',
      key: 'location',
      align: 'center',
    },
  ];
  const dataSource = [
    {
      key: '1',
      no: '1',
      datetime: '20/10/2021 - 08:39',
      name: 'COVID-19 Vaccine (Vero Cell), Inactived (Sinopharm)',
      lot: 'B2021092999',
      location: 'TYT Thị Trấn Ea KNốp',
    },
    {
      key: '1',
      no: '2',
      datetime: '25/11/2021 - 08:51',
      name: 'COVID-19 Vaccine (Vero Cell), Inactived (Sinopharm)',
      lot: 'B2021103417	',
      location: 'TYT Thị Trấn Ea KNốp',
    },
  ];

  return (
    <div>
      <div className={styles.breadcrumb} s>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="./">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./search">Tra cứu chứng nhận tiêm</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Tra cứu chứng nhận tiêm</h2>
      </div>

      <div className={styles.contain}>
        <Card className={styles.card}>
          <Form layout="vertical" form={form} onFinish={handleSubmit}>
            <Row gutter={20}>
              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <Form.Item
                  label="Họ và tên"
                  name="displayName"
                  rules={[{ required: true, message: 'Họ và tên không được để trống' }]}>
                  <Input size="middle" placeholder="Họ và tên" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <Form.Item
                  label="Ngày sinh"
                  name="dob"
                  rules={[{ required: true, message: 'Vui lòng nhập ngày sinh' }]}>
                  <DatePicker
                    style={{ width: '100%' }}
                    placeholder="Ngày/Tháng/Năm"
                    format={dateFormat}
                  />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <Form.Item
                  label="Giới tính"
                  name="gender"
                  rules={[{ required: true, message: 'Vui lòng chọn giới tính' }]}>
                  <Select placeholder="Giới tính">
                    <Option value="male">Nam</Option>
                    <Option value="female">Nữ</Option>
                    <Option value="others">Khác</Option>
                  </Select>
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  rules={[{ required: true, message: 'Vui lòng nhập số điện thoại' }, { min: 10 }]}>
                  <Input type="text" placeholder="Số điện thoại" maxLength="10" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <Form.Item
                  label="Số CMND/CCCD/HC"
                  name="idNumber"
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}>
                  <Input type="text" placeholder="Số CMND/CCCD/HC" />
                </Form.Item>
              </Col>

              <Col xs={24} sm={24} md={4} lg={4} xl={4}>
                <Form.Item label="Số thẻ BHYT" name="bhyt">
                  <Input type="text" placeholder="Số thẻ BHYT" />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ width: '100%' }}>
              <Col span={24}>
                {/* <Alert
                  message="Error Text"
                  description="Error Description Error Description Error Description Error Description"
                  type="error"
                /> */}
                <div className={styles.notice}>
                  <span style={{ fontWeight: '600' }}>Ghi chú: </span>
                  <span>
                    Nếu bạn đã tiêm nhưng chưa được ghi nhận, hãy liên hệ với cơ sở tiêm và đề nghị
                    cập nhật thông tin lên Nền tảng tiêm chủng để có thể nhận được Chứng nhận tiêm
                    hoặc phản ánh thông tin mũi tiêm{' '}
                  </span>
                  <a href="./" style={{ textDecoration: 'underline' }}>
                    tại đây
                  </a>
                </div>
              </Col>
            </Row>
            <div style={{ textAlign: 'center', margin: '1rem 0' }}>
              <Button
                className={styles.btn}
                onClick={handleReset}
                type="primary"
                ghost
                icon={<SyncOutlined />}>
                Nhập lại
              </Button>
              <Button
                className={styles.btn}
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}>
                Tra cứu
              </Button>
            </div>
          </Form>
        </Card>
        <Result visible={visible}></Result>
      </div>
    </div>
  );
};

export default Certificate;
