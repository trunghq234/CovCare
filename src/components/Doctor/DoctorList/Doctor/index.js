import { Card, Col, Image, Rate, Row } from 'antd';
import React from 'react';
import Time from './Time';
import styles from './index.module.less';
import { useHistory } from 'react-router-dom';

export default function Doctor({ doctor }) {
  const { name, title, rate, position, experience } = doctor;
  const history = useHistory();
  return (
    <Card onClick={() => history.push('/doctor-detail')} className={styles.container}>
      <Row className={styles.wrapper}>
        <Col xl={6} lg={8} md={8} sm={24} xs={24}>
          <img
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            alt={name}
          />
        </Col>
        <Col xl={12} lg={10} md={8} sm={24} xs={24} className={styles.doctorContent}>
          <p className={styles.doctorName}>{name}</p>
          <p className={styles.doctorTitle}>{title}</p>
          <Rate defaultValue={rate} className={styles.doctorRate} />
          <p className={styles.doctorPosition}>
            Vị trí: <b style={{ fontWeight: '600' }}>{position}</b>
          </p>
          <p className={styles.doctorExperience}>
            Kinh nghiệm: <b style={{ fontWeight: '600' }}>{experience}</b> năm
          </p>
        </Col>
        <Col xl={6} lg={6} md={8} sm={24} xs={24} className={styles.doctorTime}>
          <p>Ca làm việc</p>
          <Row gutter={[16, 16]}>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
            <Col lg={6} xl={6} md={6} sm={6} xs={6}>
              <Time />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
