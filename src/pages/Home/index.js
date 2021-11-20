import About from 'components/Home/About';
import News from 'components/Home/News';
import Prevention from 'components/Home/Prevention';
import React from 'react';
import styles from './home.module.less';
import homePng from '../../assets/images/header-a.png';
import { Col, Row } from 'antd';

const AppHome = () => {
  return (
    <section id="home" className={styles['home']}>
      <div className={styles['home__container']}>
        <Row gutter={[64, 0]}>
          <Col className={styles['col1']} lg={12}>
            <div className={styles['home__header']} style={{ paddingBottom: '15px' }}>
              <img src={homePng} alt="" className={styles['home__img']}></img>
            </div>
          </Col>
          <Col className={styles['col1']} lg={12}>
            <div className={styles['home__data']}>
              <h1 className={styles['heading']}>
                CORONA
                <span className={styles['heading-sm']}>
                  <span className={styles['sup']}>COVID-19</span>
                  <span className={styles['sub']}>VIRUS</span>
                </span>
              </h1>

              <p>
                The Coronavirus (COVID-19) was first reported in Wuhan, Hubei, China in December
                2019, the outbreak was later recognized as a pandemic by the World Health
                Organization (WHO) on 11 March 2020.
              </p>

              <ul className={styles['btns']}>
                <li>
                  <a className="btn" href="http://demo.themenio.com/kovid19/">
                    How to Protect
                    <i class="fas fa-shield-alt"></i>
                  </a>
                </li>
                <li>
                  <a className="btn btn__transparent" href="http://demo.themenio.com/kovid19/">
                    <span>About COVID-19</span>
                    <i class="fas fa-shield-alt"></i>
                  </a>
                </li>
              </ul>

              <div className={styles['status']}>
                <Row>
                  <Col xs={12} sm={8} className={styles['status__content']}>
                    <div className={styles['status__item']}>
                      <h6 className={styles['title']}>WORLDWIDE CASE</h6>
                      <p className={styles['covid-stats-cases']}>240,861,720</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={8} className={styles['status__content']}>
                    <div className={styles['status__item']}>
                      <h6 className={styles['title']}>DEATHS</h6>
                      <p className={styles['covid-stats-cases']}>240,861,720</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={8} className={styles['status__content']}>
                    <div className={styles['status__item']}>
                      <h6 className={styles['title']}>RECOVERD</h6>
                      <p className={styles['covid-stats-cases']}>240,861,720</p>
                    </div>
                  </Col>
                </Row>

                <div className={styles['status__note']}>
                  * Last updated:
                  <span class="covid-update-time"> Oct 16, 2021, 03:06 AM America/Chicago</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default AppHome;
