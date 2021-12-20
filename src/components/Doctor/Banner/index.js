import React from 'react';
import styles from './index.module.less';
import { Button, Col, Row } from 'antd';
import { Link } from 'react-router-dom';
import { ArrowRightOutlined } from '@ant-design/icons';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div style={{ marginTop: '60px' }}>
        <Row gutter={[20, 0]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h3 className="title">Danh sách bác sỹ</h3>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh ultrices quam in eu
              lobortis nullam consectetur. Purus sagittis orci eu faucibus.
            </p>
          </Col>
          <Col xs={0} md={10} lg={12} xl={16} />
          <Col xs={10} sm={6} md={4} xl={4}>
            <Button size="large" block type="primary">
              <Link to="/appointment/register">Đăng ký</Link>
            </Button>
          </Col>
          <Col xs={14} sm={6} md={4}>
            <Link to="/home">
              <Button size="large" block style={{ color: '#2A81EA' }} type="text" ghost>
                Tìm hiểu về COVID-19
                <ArrowRightOutlined />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
    </div>
  );
}
