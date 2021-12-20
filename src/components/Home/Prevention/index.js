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
      title: 'Rửa tay thường xuyên',
      content:
        'Thường xuyên rửa tay sạch sẽ bằng dung dịch xoa tay có cồn hoặc rửa tay bằng xà phòng và nước trong ít nhất 20 giây.',
    },
    {
      img: advice_b,
      title: 'Duy trì sự giãn cách xã hội',
      content:
        'Duy trì khoảng cách ít nhất 2 mét giữa bạn và bất kỳ ai đang ho hoặc hắt hơi. Nếu bạn ở quá gần, sẽ có cơ hội bị nhiễm bệnh.',
    },
    {
      img: advice_c,
      title: 'Tránh chạm vào mặt',
      content:
        'Tay chạm vào nhiều bề mặt và có thể nhiễm vi rút. Vì vậy, tay có thể truyền vi-rút sang mắt, mũi hoặc miệng của bạn và có thể khiến bạn bị bệnh.',
    },
    {
      img: advice_d,
      title: 'Thực hành vệ sinh đường hô hấp',
      content:
        'Giữ vệ sinh hô hấp tốt bằng cách che miệng và mũi bằng khuỷu tay cong hoặc khăn giấy khi ho hoặc hắt hơi.',
    },
  ];

  const steps = [
    {
      content: 'Rửa tay bằng xà phòng',
      image: hand_a,
    },
    {
      content: 'Xoa đều',
      image: hand_b,
    },
    {
      content: 'Giữa các ngón tay',
      image: hand_c,
    },
    {
      content: 'Quay về bàn tay',
      image: hand_d,
    },
    {
      content: 'Rửa sạch với nước',
      image: hand_e,
    },
    {
      content: 'Lau khô',
      image: hand_f,
    },
  ];

  return (
    <div id="prevention" className="container">
      <Row gutter={[0, 80]}>
        <Col span={24}>
          <div className={styles.heading}>
            <h5 className={styles.subtitle}>LÀM THẾ NÀO ĐỂ BẢO VỆ BẢN THÂN?</h5>
            <h2 className={styles.title}>PHÒNG NGỪA & LỜI KHUYÊN</h2>
            <p>
              hiện không có vắc xin phòng ngừa bệnh do coronavirus 2019 (COVID-19). Cách tốt nhất để
              phòng bệnh là tránh tiếp xúc với loại vi rút này. Nhận biết thông tin mới nhất về đợt
              bùng phát COVID-19, có trên trang web của WHO và thông qua cơ quan y tế công cộng quốc
              gia và địa phương của bạn.
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
          <h2 className={styles.title}>Làm theo các bước để rửa tay</h2>
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
