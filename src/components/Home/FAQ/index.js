import { Col, Row, Tabs } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';
import TabContent from './TabContent';
const { TabPane } = Tabs;
const FAQ = () => {
  const faqs = [
    {
      title: 'covid-basics',
      content: 'Coronavirus Disease 2019 Basics',
    },
    {
      title: 'covid-spreads',
      content: 'How It Spreads',
    },
    {
      title: 'covid-protect',
      content: 'How to Protect Yourself',
    },
    {
      title: 'covid-symptoms',
      content: 'Symptoms & Testing',
    },
    {
      title: 'covid-outbreak',
      content: 'Outbreak in Your Community',
    },
    {
      title: 'covid-myth',
      content: 'Myth-Busters of coronavirus',
    },
  ];
  const [position, setPosition] = useState(window.innerWidth >= 768 ? 'left' : 'top');
  return (
    <section className={styles['section-faq']} id="faq">
      <div className={styles.container}>
        <div className={styles['section-head']}>
          <h5 className={styles.subtitle}>Frequently Asked Questions</h5>
          <h2 className={styles.title}>Common Question & Answer</h2>
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
