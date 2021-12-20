import { Row, Tabs } from 'antd';
import React, { useEffect, useState } from 'react';

import styles from './index.module.less';
import TabContent from './TabContent';
const { TabPane } = Tabs;
const FAQ = () => {
  const faqs = [
    {
      title: 'covid-basics',
      content: 'Kiến thức cơ bản về bệnh Coronavirus 2019',
    },
    {
      title: 'covid-spreads',
      content: 'Cách nó lây lan',
    },
    {
      title: 'covid-protect',
      content: 'Cách bảo vệ bản thân',
    },
    {
      title: 'covid-symptoms',
      content: 'Triệu chứng & Kiểm tra',
    },
    {
      title: 'covid-outbreak',
      content: 'Bùng phát trong cộng đồng của bạn',
    },
    {
      title: 'covid-myth',
      content: 'Những sự thật về coronavirus',
    },
  ];
  const [position, setPosition] = useState('left');
  useEffect(() => {
    if (window.innerWidth < 768) {
      setPosition('top');
    }
  }, []);
  return (
    <section className={styles['section-faq']} id="faq">
      <div className={styles.container}>
        <div className={styles['section-head']}>
          <h5 className={styles.subtitle}>Các câu hỏi thường gặp</h5>
          <h2 className={styles.title}>Câu hỏi & câu trả lời phổ biến</h2>
        </div>
        <div className={styles['section-content']}>
          <Row className={styles.row}>
            <div className={styles['tab-content']}>
              <Tabs tabPosition={position} className={styles.tabs}>
                {faqs.map((faq, index) => {
                  return (
                    <TabPane tab={faq.content} key={faq.title}>
                      <TabContent id={index} />
                    </TabPane>
                  );
                })}
              </Tabs>
            </div>
          </Row>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
