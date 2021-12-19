import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import styles from './index.module.less';

const listButton = [
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
  {
    title: 'Lorem ipsum',
  },
];

const Search = () => {
  return (
    <div className={styles.wrapper}>
      <p className={styles.searchTitle}>Lorem ipsum dolor</p>
      <Row gutter={[20, 0]}>
        <Col span={22}>
          <Input className={styles.searchInput} />
        </Col>
        <Col span={2}>
          <Button className={styles.searchButton} type="primary" size="large">
            Search
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: '20px' }}>
          <Row gutter={[24, 24]}>
            {listButton.map(button => (
              <Col key={button.title} span={2}>
                <Button>{button.title}</Button>
              </Col>
            ))}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Search;
