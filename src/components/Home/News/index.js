import { Col, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

import news_a from 'assets/images/news-a.jpg';
import news_b from 'assets/images/news-b.jpg';
import news_c from 'assets/images/news-c.jpg';
import NewsCard from './NewsCard';
const newsList = [
  {
    title: 'Chăm sóc ở nhà',
    content:
      'Hầu hết những người bị bệnh với COVID-19 sẽ chỉ bị bệnh nhẹ và sẽ tự phục hồi tại nhà. Chăm sóc tại nhà có thể giúp ngăn chặn sự lây lan của COVID-19',
    image: news_a,
  },
  {
    title: '15 cách để giữ an toàn và khỏe mạnh',
    content:
      'Hầu hết những người bị bệnh với COVID-19 sẽ chỉ bị bệnh nhẹ và sẽ tự phục hồi tại nhà. Chăm sóc tại nhà có thể giúp ngăn chặn sự lây lan của COVID-19',
    image: news_b,
  },
  {
    title: 'Nếu bạn nghĩ rằng bạn bị ốm',
    content:
      'Nếu bạn bị bệnh với COVID-19 hoặc nghĩ rằng bạn có thể mắc bệnh này, hãy làm theo các bước dưới đây để giúp bảo vệ những người khác trong gia đình và cộng đồng của bạn',
    image: news_c,
  },
];
console.log(newsList);
const News = () => {
  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <Row gutter={[0, 80]}>
        <Col span={24}>
          <div className={styles.heading}>
            <h5 className={styles.subtitle}>BLOG GẦN ĐÂY</h5>
            <h2 className={styles.title}>CẬP NHẬT MỚI NHẤT</h2>
          </div>
          <Row gutter={20}>
            {newsList.map((news, index) => {
              return (
                <Col
                  key={index}
                  sm={{ span: 24, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  xl={{ span: 8, offset: 0 }}>
                  <NewsCard title={news.title} content={news.content} image={news.image} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default News;
