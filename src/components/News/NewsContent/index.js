import React from 'react';
import { Card, Col, Row } from 'antd';
import { timeConverter } from 'utils/converter';
import styles from './index.module.less';

const NewsContent = ({ data }) => {
  return (
    <Card style={{ marginBottom: '20px' }}>
      <a target="_blank" rel="noreferrer" href={data.share_url}>
        <Row gutter={[16, 16]}>
          <Col xs={{ span: 0 }} md={{ span: 8 }} lg={{ span: 6 }}>
            <img
              style={{ borderRadius: '8px', height: '100%', width: '100%' }}
              alt={data.title}
              src={data.thumbnail_url}
            />
          </Col>
          <Col xs={{ span: 24 }} md={{ span: 16 }} lg={{ span: 18 }}>
            <div className={styles.contentCard}>
              <h3>{data.title}</h3>
              <span className={styles.lastUpdated}>{timeConverter(data.publish_time)}</span>
              <p>{data.lead}</p>
            </div>
          </Col>
        </Row>
      </a>
    </Card>
  );
};

export default NewsContent;
