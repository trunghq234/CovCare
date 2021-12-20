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
          <h5 className={styles['symptons__subtitle']}>Các triệu chứng của COVID-19 là gì?</h5>
          <h2 className={styles['symptons__title']}>Các triệu chứng của Coronavirus</h2>
          <p>
            Các triệu chứng phổ biến nhất của COVID-19 là sốt, mệt mỏi và ho khan. Một số bệnh nhân
            có thể bị đau nhức, nghẹt mũi, chảy nước mũi, đau họng hoặc tiêu chảy. Các triệu chứng
            này thường nhẹ và bắt đầu nặng dần dần. Ngoài ra, các triệu chứng có thể xuất hiện 2-14
            ngày sau khi tiếp xúc.
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
                  <h5 className={styles['box__title']}>Sốt</h5>
                  <p>
                    <strong>Sốt nặng</strong> – điều này có nghĩa là bạn cảm thấy nóng khi chạm vào
                    ngực hoặc lưng (bạn không cần đo nhiệt độ). Đây là một dấu hiệu phổ biến và cũng
                    có thể xuất hiện sau 2-10 ngày nếu bạn bị mắc bệnhc.
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
                  <h5 className={styles['box__title']}>Ho</h5>
                  <p>
                    <strong>Ho liên tục</strong> – điều này có nghĩa là ho nhiều trong hơn một giờ,
                    hoặc 3 cơn ho trở lên trong 24 giờ (nếu bạn thường bị ho, nó có thể nặng hơn
                    bình thường).
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
                  <h5 className={styles['box__title']}>Khó thở</h5>
                  <p>
                    <strong>Khó thở</strong> – Cứ 6 người thì có 1 người bị nhiễm COVID-19 bị bệnh
                    nặng và khó thở hoặc thở gấp.
                  </p>
                </div>
              </div>
            </Col>
          </Row>

          <div className={styles['symptons__cta']}>
            <Row>
              <Col className={styles['col']} lg={14} xs={24} sm={24}>
                <p>
                  <strong className={styles['title']}>Ở nhà và gọi cho bác sĩ của bạn:</strong> Nếu
                  bạn nghĩ rằng bạn đã tiếp xúc với COVID-19 và bị sốt và bất kỳ triệu chứng nào,
                  chẳng hạn như ho hoặc khó thở, hãy gọi cho nhà cung cấp dịch vụ chăm sóc sức khỏe
                  của bạn càng sớm càng tốt để được tư vấn y tế.
                </p>
              </Col>
              <Col className={styles['col']} lg={10} xs={24} sm={24}>
                <div>
                  <a className="btn" href="http://localhost:3000">
                    Có câu hỏi khác? Tìm câu trả lời.
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
