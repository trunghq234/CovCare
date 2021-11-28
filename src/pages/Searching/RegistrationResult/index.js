import { SearchOutlined, SyncOutlined } from '@ant-design/icons';
import { Breadcrumb, Button, Card, Col, Form, Input, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

const RegistrationResult = props => {
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
            <a href="./search">Tra cứu đăng ký tiêm</a>
          </Breadcrumb.Item>
        </Breadcrumb>
        <h2>Tra cứu đăng ký tiêm</h2>
      </div>

      <div className={styles.contain}>
        <Card className={styles.card}>
          <Form layout="vertical">
            <Row gutter={20}>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label="Số CMND/CCCD/Mã định danh công dân/Hộ chiếu"
                  name="idNumber"
                  rules={[
                    {
                      required: true,
                      message: 'Số CMND/CCCD/Mã định danh công dân/Hộ Chiếu không được bỏ trống',
                    },
                  ]}>
                  <Input size="middle" placeholder="Số CMND/CCCD/Mã định danh công dân/Hộ chiếu" />
                </Form.Item>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <Form.Item
                  label="Số điện thoại"
                  name="phoneNumber"
                  rules={[{ required: true, message: 'Số điện thoại' }]}>
                  <Input size="middle" placeholder="Số điện thoại không được bỏ trống" />
                </Form.Item>
              </Col>
            </Row>
            <Row style={{ width: '100%' }}>
              <Col span={24}>
                <div className={styles.notice}>
                  <span>
                    Lưu ý: Nếu bạn dưới 18 tuổi, vui lòng nhập số điện thoại của người giám hộ để
                    tra cứu{' '}
                  </span>
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

export default RegistrationResult;
