import { Card, Col, Image, Rate, Row } from 'antd';
import React from 'react';
import Time from './Time/time';
import styles from './index.module.less';

export default function Doctor({ doctor }) {
  const { name, title, rate, position, experience } = doctor;
  return (
    <Card>
      <Row className={styles.wrapper}>
        <Col span={6}>
          <Image
            width={200}
            src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
          />
        </Col>
        <Col span={12} className={styles.doctorContent}>
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
        <Col span={6} className={styles.doctorTime}>
          <p>
            Lorem ipsum dolor sit amet: <b>13/11/2021</b>
          </p>
          <Row gutter={[16, 16]}>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
            <Col span={6}>
              <Time />
            </Col>
          </Row>
        </Col>
      </Row>
    </Card>
  );
}
