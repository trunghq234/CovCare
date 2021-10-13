import React from 'react';
import { Col, Row } from 'antd';
import AdviceBox from './AdviceBox';
import AdviceCard from './AdviceCard';
import WashHands from './WashHands';

import styles from './index.module.less';

import advice_a from 'assets/images/advice-a.png';
import advice_b from 'assets/images/advice-b.png';
import advice_c from 'assets/images/advice-c.png';
import advice_d from 'assets/images/advice-d.png';
import hand_a from 'assets/images/hand-a.png';
import hand_b from 'assets/images/hand-b.png';
import hand_c from 'assets/images/hand-c.png';
import hand_d from 'assets/images/hand-d.png';
import hand_e from 'assets/images/hand-e.png';
import hand_f from 'assets/images/hand-f.png';

const Prevention = () => {
  const advices = [
    {
      img: advice_a,
      title: 'Wash your hands frequently',
      content:
        'Regularly and thoroughly clean your hands with an alcohol-based hand rub or wash them with soap and water for at least 20 seconds.',
    },
    {
      img: advice_b,
      title: 'Maintain social distancing',
      content:
        'Maintain at least 2 metre distance between yourself & anyone who is coughing or sneezing. If you are too close, get chance to infected.',
    },
    {
      img: advice_c,
      title: 'Avoid touching face',
      content:
        'Hands touch many surfaces and can pick up viruses. So, hands can transfer the virus to your eyes, nose or mouth and can make you sick.',
    },
    {
      img: advice_d,
      title: 'Practice respiratory hygiene',
      content:
        'Maintain good respiratory hygiene as covering your mouth & nose with your bent elbow or tissue when cough or sneeze.',
    },
  ];

  const steps = [
    {
      content: 'Soap on hand',
      image: hand_a,
    },
    {
      content: 'Palm to palm',
      image: hand_b,
    },
    {
      content: 'Between fingers',
      image: hand_c,
    },
    {
      content: 'Back to hands',
      image: hand_d,
    },
    {
      content: 'Clean with water',
      image: hand_e,
    },
    {
      content: 'Focus on wrist',
      image: hand_f,
    },
  ];

  return (
    <div id="#prevention" className="container">
      <Row gutter={[0, 80]}>
        <Col span={24}>
          <div className={styles.heading}>
            <h5 className={styles.subtitle}>HOW TO PROTECT YOURSELF?</h5>
            <h2 className="title">PREVENTION & ADVICE</h2>
            <p>
              There is currently no vaccine to prevent coronavirus disease 2019 (COVID-19). The best
              way to prevent illness is to avoid being exposed to this virus. Stay aware of the
              latest information on the COVID-19 outbreak, available on the WHO website and through
              your national and local public health authority.
            </p>
          </div>
          <Row gutter={[20, 40]}>
            {advices.map((advice, index) => {
              return (
                <Col key={index} xs={24} md={12} xl={6}>
                  <AdviceBox img={advice.img} title={advice.title} content={advice.content} />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Col span={24}>
          <AdviceCard />
        </Col>
        <Col span={24}>
          <h2 className={styles.title}>Follow steps to wash hands</h2>
          <Row gutter={20}>
            {steps.map((step, index) => {
              return (
                <Col key={index} xs={12} md={8} xl={4} style={{ textAlign: 'center' }}>
                  <WashHands step={step} />
                </Col>
              );
            })}
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Prevention;
