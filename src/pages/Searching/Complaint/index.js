import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Form, Input, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

const Complaint = props => {
  const handleSubmit = () => {};
  const handleReset = () => {};
  return (
    <div>
      <div className={styles.breadcrumb} s>
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
          <Form layout="vertical">
            <Row gutter={20} justify="center">
              <Col xs={24} md={16}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[{ required: true, message: 'Số điện thoại không được bỏ trống' }]}>
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
      </div>
    </div>
  );
};

export default Complaint;
