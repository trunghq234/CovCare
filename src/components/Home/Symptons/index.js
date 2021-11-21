import { Col, Row } from 'antd';
import React from 'react';
import styles from './symptons.module.less';
import symptomA from '../../../assets/images/symptom-a.png';
import symptomB from '../../../assets/images/symptom-b.png';
import symptomC from '../../../assets/images/symptom-c.png';

const Symptons = () => {
  return (
    <section className={styles['symptons']} id="symptons">
      <div className={styles['symptons__container']}>
        <div className={styles['symptons__head']}>
          <h5 className={styles['symptons__subtitle']}>What are the symptoms of COVID-19?</h5>
          <h2 className={styles['symptons__title']}>Symptoms of Coronavirus</h2>
          <p>
            The most common symptoms of COVID-19 are fever, tiredness, and dry cough. Some patients
            may have aches and pains, nasal congestion, runny nose, sore throat or diarrhea. These
            symptoms are usually mild and begin gradually. Also the symptoms may appear 2-14 days
            after exposure.
          </p>
        </div>

        <div className={styles['symptons__content']}>
          <Row gutter={[24, 0]} className={styles['symptons__row']}>
            <Col className={styles['symptons__item']} lg={8} xs={24} sm={24}>
              <div className={styles['symptons__box']}>
                <div className={styles['box__img']}>
                  <img src={symptomA} alt=""></img>
                </div>
                <div className={styles['box__content']}>
                  <h5 className={styles['box__title']}>Fever</h5>
                  <p>
                    <strong>High Fever</strong> – this means you feel hot to touch on your chest or
                    back (you do not need to measure your temperature). It is a common sign and also
                    may appear in 2-10 days if you affected.
                  </p>
                </div>
              </div>
            </Col>
            <Col className={styles['symptons__item']} lg={8} xs={24} sm={24}>
              <div className={styles['symptons__box']}>
                <div className={styles['box__img']}>
                  <img src={symptomB} alt=""></img>
                </div>
                <div className={styles['box__content']}>
                  <h5 className={styles['box__title']}>Could</h5>
                  <p>
                    <strong>Continuous cough</strong> – this means coughing a lot for more than an
                    hour, or 3 or more coughing episodes in 24 hours (if you usually have a cough,
                    it may be worse than usual).
                  </p>
                </div>
              </div>
            </Col>
            <Col className={styles['symptons__item']} lg={8} xs={24} sm={24}>
              <div className={styles['symptons__box']}>
                <div className={styles['box__img']}>
                  <img src={symptomC} alt=""></img>
                </div>
                <div className={styles['box__content']}>
                  <h5 className={styles['box__title']}>Shortness of breath</h5>
                  <p>
                    <strong>Difficulty breathing</strong> – Around 1 out of every 6 people who gets
                    COVID-19 becomes seriously ill and develops difficulty breathing or shortness of
                    breath.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <div className={styles['symptons__cta']}>
            <Row>
              <Col className={styles['col']} lg={14} xs={24} sm={24}>
                <p>
                  <strong className={styles['title']}>Stay at home and call your doctor:</strong> If
                  you think you have been exposed to COVID-19 and develop a fever and any symptoms,
                  such as cough or difficulty breathing, call your healthcare provider as soon as
                  possible for medical advice.
                </p>
              </Col>
              <Col className={styles['col']} lg={10} xs={24} sm={24}>
                <div>
                  <a className="btn" href="http://localhost:3000">
                    Have question? Find answer.
                  </a>
                </div>
              </Col>
            </Row>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Symptons;
