import { Card, Checkbox, Col, DatePicker, Row, Button } from 'antd';
import React from 'react';
import styles from './index.module.less';

const Filter = () => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Lorem ipsum dolor sit amet</p>
        <div>
          <Row>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (30)</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (30)</Checkbox>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Lorem ipsum dolor sit amet</p>
        <DatePicker size="medium" />
      </div>

      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Lorem ipsum dolor sit amet</p>
        <div>
          <Row>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (25)</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (25)</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (25)</Checkbox>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Lorem ipsum dolor sit amet</p>
        <div>
          <Row>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (25)</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (25)</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Lorem ipsum (25)</Checkbox>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.filterBox}>
        <Button className={styles.filterButton}>Lorem ipsum Button</Button>
        <p style={{ color: 'rgb(103, 193, 255)' }}>Lorem ipsum dolor sit amet</p>
      </div>
    </Card>
  );
};

export default Filter;
