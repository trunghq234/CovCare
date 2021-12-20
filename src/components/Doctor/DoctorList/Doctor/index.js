import { Card, Col, Image, Rate, Row } from 'antd';
import React from 'react';
import Time from './Time';
import styles from './index.module.less';

export default function Doctor({ doctor }) {
  const { name, title, rate, position, experience } = doctor;
  return (
    <Card>
      <Row className={styles.wrapper}>
        <Col lg={6} xl={6} md={8} sm={24} xs={24}>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col lg={12} xl={12} md={8} sm={24} xs={24} className={styles.doctorContent}>
          <p className={styles.doctorName}>{name}</p>
          <p className={styles.doctorTitle}>{title}</p>
          <Rate defaultValue={rate} className={styles.doctorRate} />
          <p className={styles.doctorPosition}>
            Position: <b>{position}</b>
          </p>
          <p className={styles.doctorExperience}>
            Experience: <b>{experience}</b> years
          </p>
        </Col>
        <Col lg={6} xl={6} md={8} sm={24} xs={24} className={styles.doctorTime}>
          <p>
            Lorem ipsum dolor sit amet: <b>13/11/2021</b>
          </p>
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
