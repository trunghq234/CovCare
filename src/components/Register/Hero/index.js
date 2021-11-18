import React from 'react';
import styles from './index.module.less';
import { Button, Col, Row } from 'antd';

const Hero = () => {
  return (
    <div className={styles.banner}>
      <div style={{ marginTop: '80px' }} className="container">
        <Row gutter={[20, 0]}>
          <Col span={8}>
            <h3 className="title">Đăng ký tiêm chủng</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh ultrices quam in eu
              lobortis nullam consectetur. Purus sagittis orci eu faucibus.
            </p>
          </Col>
          <Col span={16} />
          <Col span={4}>
            <Button type="primary" block>
              Đăng ký
            </Button>
          </Col>
          <Col span={4}>
            <Button type="primary" block ghost>
              Đăng ký
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
