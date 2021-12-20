import { Col, Row } from 'antd';
import React from 'react';
import homePng from '../../../assets/images/header-a.png';
import styles from './home.module.less';

const Home = () => {
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
                Coronavirus (COVID-19) lần đầu tiên được báo cáo xuất hiện tại Vũ Hán, Hồ Bắc, Trung
                Quốc vào tháng 12 2019, đợt bùng phát sau đó đã được tổ chức Y tế Thế giới (WHO)
                công nhận là đại dịch vào ngày 11 tháng 3 năm 2020.
              </p>

              <ul className={styles['btns']}>
                <li>
                  <a className="btn" href="http://demo.themenio.com/kovid19/">
                    Cách để tự bảo vệ
                    <i class="fas fa-shield-alt"></i>
                  </a>
                </li>
                <li>
                  <a className="btn btn__transparent" href="http://demo.themenio.com/kovid19/">
                    <span>Thông tin COVID-19</span>
                    <i class="fas fa-shield-alt"></i>
                  </a>
                </li>
              </ul>

              <div className={styles['status']}>
                <Row>
                  <Col xs={12} sm={8} className={styles['status__content']}>
                    <div className={styles['status__item']}>
                      <h6 className={styles['title']}>Số ca nhiễm trên thế giới</h6>
                      <p className={styles['covid-stats-cases']}>275,007,350</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={8} className={styles['status__content']}>
                    <div className={styles['status__item']}>
                      <h6 className={styles['title']}>Số người mất</h6>
                      <p className={styles['covid-stats-cases']}>5,370,192</p>
                    </div>
                  </Col>
                  <Col xs={12} sm={8} className={styles['status__content']}>
                    <div className={styles['status__item']}>
                      <h6 className={styles['title']}>Số người khỏi bệnh</h6>
                      <p className={styles['covid-stats-cases']}>246,674,846</p>
                    </div>
                  </Col>
                </Row>

                <div className={styles['status__note']}>
                  * Cập nhật:
                  <span class="covid-update-time"> 20/12/2021, 09:30 AM Chicago/Mỹ</span>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </div>
    </section>
  );
};

export default Home;
