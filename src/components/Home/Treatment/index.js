import { Col, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

const Treatment = () => {
  const advices = [
    {
      content: 'Rest and sleep',
    },
    {
      content: 'Keep warm',
    },
    {
      content: 'Drink plenty of liquids',
    },
    {
      content: 'Use a room humidifier or take a hot shower to help ease a sore throat and cough',
    },
  ];
  return (
    <section className={styles['section-treatment']} id="treatment">
      <div className={styles.shape}>
        <div className={styles.container}>
          <div className="section-content">
            <Row gutter={[0, 80]} className={styles['row']}>
              <Col xs={24} sm={24} md={14} className={styles['col-left']}>
                <div className={styles['text-block']}>
                  <h5 className={styles.subtitle}>BE CAREFULL & STAY SAFE</h5>
                  <h2 className={styles.title}>TREATMENT FOR CORONAVIRUS</h2>
                  <p>
                    <strong>
                      To date, there is no vaccine and no specific antiviral medicine to prevent or
                      treat COVID-2019.
                    </strong>
                    However, those affected should receive care to relieve symptoms. People with
                    serious illness should be hospitalized. Most patients recover thanks to
                    supportive care.
                  </p>
                  <p>
                    Antibiotics do not help, as they do not work against viruses. Treatment aims to
                    relieve the symptoms while your body fights the illness. You'll need to stay in
                    isolation, away from other people, until you have recovered.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} className={styles['col-right']}>
                <div className={styles.box}>
                  <h6 className={styles.title}>Self Care</h6>
                  <p>
                    If you have mild symptoms, stay at home until you’ve recovered. You can relieve
                    your symptoms if you:
                  </p>
                  <ul class="list-arrow">
                    {advices.map((advice, index) => {
                      return <li>{advice.content}</li>;
                    })}
                  </ul>
                  <h6 class={styles.title}>Medical Treatments</h6>
                  <p>
                    If you develop a fever, cough, and have difficulty breathing, promptly seek
                    medical care. Call in advance and tell your health provider of any recent travel
                    or recent contact with travelers.
                  </p>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Treatment;
