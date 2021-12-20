import React from 'react';
import { Button, Col, Input, Row } from 'antd';
import styles from './index.module.less';

const listButton = [
  {
    title: 'Khoa nội',
  },
  {
    title: 'Khoa ngoại',
  },
  {
    title: 'Khoa phụ sản',
  },
  {
    title: 'Khoa nhi',
  },
  {
    title: 'Khoa truyền nhiễm',
  },
  {
    title: 'Khoa cấp cứu',
  },
  {
    title: 'Khoa hồi sức tích cực',
  },
  {
    title: 'Khoa ung bướu',
  },
  {
    title: 'Khoa dược',
  },
  {
    title: 'Khoa dinh dưỡng',
  },
];

const Search = () => {
  return (
    <div className={styles.wrapper}>
      {/* <p className={styles.searchTitle}>Lorem ipsum dolor</p> */}
      <Row gutter={[20, 0]}>
        <Col span={22}>
          <Input className={styles.searchInput} />
        </Col>
        <Col span={2}>
          <Button className={styles.searchButton} type="primary" size="large">
            Tìm kiếm
          </Button>
        </Col>
        <Col span={24} style={{ marginTop: '20px' }}>
          {listButton.map(button => (
            <Button key={button.title} style={{ marginRight: '20px', padding: '0 10px' }}>
              {button.title}
            </Button>
          ))}
        </Col>
      </Row>
    </div>
  );
};

export default Search;
