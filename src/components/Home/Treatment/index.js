import { Col, Row } from 'antd';
import React from 'react';
import styles from './index.module.less';

const Treatment = () => {
  const advices = [
    {
      content: 'Nghỉ ngơi và ngủ đủ giấc',
    },
    {
      content: 'Giữ ấm',
    },
    {
      content: 'Uống nhiều chất lỏng',
    },
    {
      content: 'Sử dụng máy làm ẩm phòng hoặc tắm nước nóng để giúp giảm đau họng và ho',
    },
  ];
  return (
    <section className={styles['section-treatment']} id="treatment">
      <div className={styles.shape}>
        <div className={styles.container}>
          <div className="section-content">
            <Row gutter={[60, 80]} className={styles['row']}>
              <Col xs={24} sm={24} md={14} className={styles['col-left']}>
                <div className={styles['text-block']}>
                  <h5 className={styles.subtitle}>CẨN THẬN & Ở NHÀ AN TOÀN</h5>
                  <h2 className={styles.title}>ĐIỀU TRỊ CORONAVIRUS</h2>
                  <p>
                    <strong>
                      Cho đến nay, không có vắc-xin và không có thuốc kháng vi-rút cụ thể để ngăn
                      ngừa hoặc xử lý COVID-2019.
                    </strong>{' '}
                    Tuy nhiên, những người bị mắc bệnh nên được chăm sóc để giảm các triệu chứng.
                    Người bệnh nặng nên nhập viện. Hầu hết bệnh nhân hồi phục nhờ chăm sóc hỗ trợ.
                  </p>
                  <p>
                    Thuốc kháng sinh không giúp ích được gì, vì chúng không hoạt động chống lại vi
                    rút. Điều trị nhằm mục đích làm giảm các triệu chứng trong khi cơ thể bạn chống
                    chọi với bệnh tật. Bạn sẽ cần phải sống cách li, tránh xa những người khác, cho
                    đến khi bạn hồi phục.
                  </p>
                </div>
              </Col>
              <Col xs={24} sm={24} md={10} className={styles['col-right']}>
                <div className={styles.box}>
                  <h6 className={styles.title}>Tự chăm sóc bản thân</h6>
                  <p>
                    Nếu bạn có các triệu chứng nhẹ, hãy ở nhà cho đến khi khỏi bệnh. Bạn có thể giảm
                    các triệu chứng của mình nếu bạn:
                  </p>
                  <ul class="list-arrow">
                    {advices.map((advice, index) => {
                      return <li>{advice.content}</li>;
                    })}
                  </ul>
                  <h6 class={styles.title}>Điều trị y tế</h6>
                  <p>
                    Nếu bạn bị sốt, ho và khó thở, hãy nhanh chóng đi khám. Gọi điện trước và thông
                    báo cho nhà cung cấp dịch vụ y tế của bạn về bất kỳ chuyến du lịch nào gần đây
                    hoặc liên hệ gần đây với khách du lịch.
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
