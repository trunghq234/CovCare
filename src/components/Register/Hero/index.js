import React from 'react';
import styles from './index.module.less';
import { Button, Col, Row } from 'antd';
import { ArrowRightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';

const Hero = () => {
  return (
    <div className={styles.banner}>
      <div style={{ marginTop: '60px' }} className="container">
        <Row gutter={[20, 0]}>
          <Col xs={24} md={14} lg={12} xl={12}>
            <h3 className="title">Đăng ký tiêm chủng</h3>
            <p>
              Việc đăng ký thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch tiêm chủng Vắc xin
              COVID - 19.
            </p>
          </Col>
          <Col xs={0} md={10} lg={12} xl={12} />
          <Col xs={14} sm={6} md={4}>
            <Link to="/home">
              <Button style={{ color: '#2A81EA', paddingLeft: '0px' }} type="text" block ghost>
                Tìm hiểu về COVID-19 <ArrowRightOutlined />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default Hero;
