import { Card, Checkbox, Col, Row, Button } from 'antd';
import React from 'react';
import styles from './index.module.less';

const Filter = () => {
  return (
    <Card className={styles.wrapper}>
      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Khoa</p>
        <div>
          <Row>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Khoa nội</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Khoa ngoại</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Khoa phụ sản</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Khoa nhi</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Khoa dược</Checkbox>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.filterBox}>
        <p className={styles.filterTitle}>Chức vụ</p>
        <div>
          <Row>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Giám đốc</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Trưởng khoa</Checkbox>
            </Col>
            <Col span={24}>
              <Checkbox className={styles.filterCheckbox}>Nhân viên</Checkbox>
            </Col>
          </Row>
        </div>
      </div>
      <div className={styles.filterBox}>
        <Button block>Lọc</Button>
      </div>
    </Card>
  );
};

export default Filter;
