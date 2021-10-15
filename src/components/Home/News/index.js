import { Col, Row } from 'antd';
import React from 'react';
import style from './index.module.less';

import news_a from 'assets/images/news-a.jpg';
import news_b from 'assets/images/news-b.jpg';
import news_c from 'assets/images/news-c.jpg';
import NewsCard from './NewsCard';
const newsList = [
  {
    title: 'Caring for someone at home',
    content:
      'Most people who get sick with COVID-19 will have only mild illness and should recover at home. Care at home can help stop the spread of COVID-19',
    image: news_a,
  },
  {
    title: '15 ways to keep safe and healthy',
    content:
      'Most people who get sick with COVID-19 will have only mild illness and should recover at home. Care at home can help stop the spread of COVID-19',
    image: news_b,
  },
  {
    title: 'If You Think You Are Sick',
    content:
      'If you are sick with COVID-19 or think you might have it, follow the steps below to help protect other people in your home and community',
    image: news_c,
  },
];
console.log(newsList);
const News = () => {
  return (
    <div className="container" style={{ marginTop: '100px' }}>
      <Row gutter={[0, 80]}>
        <Col span={24}>
          <div className={style.heading}>
            <h5>RECENT FROM BLOG</h5>
            <h2>LATEST UPDATE</h2>
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
