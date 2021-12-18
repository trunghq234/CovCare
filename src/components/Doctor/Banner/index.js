import React from 'react';
import styles from './index.module.less';
import { Button, Col, Row } from 'antd';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div style={{ marginTop: '80px' }} className="container">
        <Row gutter={[20, 0]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h3 className="title">Danh sách bác sỹ</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh ultrices quam in eu
              lobortis nullam consectetur. Purus sagittis orci eu faucibus.
            </p>
          </Col>
          <Col xs={0} md={10} lg={12} xl={16} />
          <Col xs={10} sm={6} md={4} xl={3}>
            <Button type="primary" block>
              Đăng ký
            </Button>
          </Col>
          <Col xs={14} sm={6} md={4}>
            <Button style={{ color: '#2A81EA' }} type="text" block ghost>
              Tìm hiểu về COVID-19
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
}
