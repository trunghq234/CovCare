import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Form, Input, Row, Table, Tag } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';

const Complaint = props => {
  const [form] = Form.useForm();

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
      title: 'STT',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
    },
    {
      title: 'Họ và tên',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Giới tính',
      dataIndex: 'gender',
      key: 'gender',
      align: 'center',
    },

    {
      title: 'Số CMND/CCCD/HC',
      dataIndex: 'idNumber',
      key: 'idNumber',
      align: 'center',
    },
    {
      title: 'Ngày phản ánh',
      dataIndex: 'date',
      key: 'date',
      align: 'center',
    },
    {
      title: 'Mô tả',
      dataIndex: 'description',
      key: 'description',
      align: 'center',
    },
    {
      title: 'Đánh giá',
      dataIndex: 'review',
      key: 'review',
      align: 'center',
      render: review =>
        review === 'Khá' ? (
          <Tag color="blue">{review}</Tag>
        ) : review === 'Tốt' ? (
          <Tag color="green">{review}</Tag>
        ) : (
          <Tag color="red">{review}</Tag>
        ),
    },
  ];
  const dataSource = [
    {
      key: '1',
      no: '1',
      gender: 'Nam',
      name: 'Đỗ Văn Bảo',
      date: '1/1/2021',
      idNumber: '241819911',
      description: 'Tiêm rất tốt',
      review: 'Tốt',
    },
    {
      key: '2',
      no: '2',
      gender: 'Nam',
      name: 'Đỗ Văn Bảo',
      date: '15/2/2021',
      idNumber: '241819911',
      description: 'Giãn cách chưa tốt',
      review: 'Khá',
    },
    {
      key: '3',
      no: '3',
      gender: 'Nam',
      name: 'Đỗ Văn Bảo',
      date: '12/3/2021',
      idNumber: '241819911',
      description: 'Thái độ kém',
      review: 'Chưa tốt',
    },
  ];
  return (
    <div>
      <div className={styles.breadcrumb}>
        <Breadcrumb>
          <Breadcrumb.Item>
            <a href="./">Trang chủ</a>
          </Breadcrumb.Item>
          <Breadcrumb.Item>
            <a href="./search">Tra cứu Phản ánh tiêm chủng vắc xin COVID-19</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Tra cứu Phản ánh tiêm chủng vắc xin COVID-19</h2>
      </div>
      <div className={styles.contain}>
        <Card className={styles.card}>
          <Form layout="vertical" form={form}>
            <Row gutter={20} justify="center">
              <Col xs={24} md={16}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  onKeyPress={event => {
                    if (!/[0-9]/.test(event.key)) {
                      event.preventDefault();
                    }
                  }}
                  rules={[
                    {
                      required: true,
                      message: 'Số điện thoại không được bỏ trống',
                    },
                    { min: 10, message: 'Vui lòng nhập số điện thoại đúng định dạng' },
                  ]}>
                  <Input size="middle" placeholder="Số điện thoại" />
                </Form.Item>
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
                onClick={handleSubmit}
                type="primary"
                htmlType="submit"
                icon={<SearchOutlined />}>
                Tra cứu
              </Button>
            </div>
          </Form>
        </Card>
        <div className={styles.result} style={{ display: visible }}>
          <h3>Kết quả tra cứu ({dataSource.length})</h3>
          <Table
            dataSource={dataSource}
            columns={columns}
            pagination={false}
            scroll={{ x: '1300' }}></Table>
        </div>
      </div>
    </div>
  );
};

export default Complaint;
