import { Col, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div style={{ marginTop: '60px' }} className="container">
        <Row gutter={[20, 0]}>
          <Col xs={24} md={14} lg={12} xl={12}>
            <h3 className="title">Đăng ký tình nguyện viên</h3>
            <p>
              Mạng lưới được thành lập nhằm huy động nguồn lực xã hội tư vấn người nhiễm hoặc có
              nguy cơ cao mắc Covid-19 tại cộng đồng, hỗ trợ tăng cường cho Y tế các tỉnh đang thực
              hiện chỉ thị 16 tăng cường.
            </p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
