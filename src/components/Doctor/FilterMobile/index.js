import { Card, Checkbox, Col, Select, Row, Button } from 'antd';
import React from 'react';
import styles from './index.module.less';
const { Option } = Select;

const FilterMobile = () => {
  return (
    <Card className={styles.wrapper}>
      <Row>
        <Select>
          <Option></Option>
        </Select>
      </Row>
    </Card>
  );
};

export default FilterMobile;
