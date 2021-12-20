import { Col, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div style={{ marginTop: '60px' }} className="container">
        <Row gutter={[20, 0]}>
          <Col xs={24} md={14} lg={12} xl={8}>
            <h3 className="title">Đăng ký cửa hàng hỗ trợ</h3>
            <p>Bạn muốn đăng ký trở thành điểm bán hàng thiết yếu. Điền các thông tin bên dưới.</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}
