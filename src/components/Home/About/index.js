import { Button, Col, Row } from 'antd';
import React from 'react';
import MoreInfo from './MoreInfo';
import style from './index.module.less';
import SpreadCard from './SpreadCard';

import about_a from 'assets/images/about-a.png';
import about_b from 'assets/images/about-b.png';
import about_c from 'assets/images/about-c.png';

const spreads = [
  {
    title: 'Lây truyền từ người sang người khi tiếp xúc gần với người bị nhiễm bệnh',
    content:
      'Người ta cho rằng coronavirus lây lan chủ yếu từ người này sang người khác. Điều này có thể xảy ra giữa những người tiếp xúc gần gũi với nhau.',
    image: about_a,
  },
  {
    title: 'Chạm hoặc tiếp xúc với các bề mặt hoặc vật thể bị nhiễm bệnh',
    content:
      'Một người có thể bị nhiễm COVID-19 bằng cách chạm vào bề mặt hoặc vật thể có vi-rút trên đó và sau đó chạm vào miệng, mũi hoặc có thể là mắt của họ.',
    image: about_b,
  },
  {
    title: 'Các giọt từ người bị nhiễm bệnh ho hoặc hắt hơi',
    content:
      'Người ta cho rằng coronavirus lây lan chủ yếu từ người này sang người khác. Điều này có thể xảy ra giữa những người tiếp xúc gần gũi với nhau.',
    image: about_c,
  },
];

const About = () => {
  return (
    <div>
      <div className="container">
        <Row gutter={[40, 20]} className={style['row-about']}>
          <Col xs={24} md={14} xl={16}>
            <h5 className={style.subtitle}>Thông tin về dịch bệnh</h5>
            <h2 className={style.title}>CORONAVIRUS (COVID-19)</h2>
            <h3>
              <strong>
                COVID-19 là một căn bệnh mới có thể ảnh hưởng đến phổi và đường hô hấp.
              </strong>{' '}
              Nó do một loại vi rút có tên là coronavirus gây ra. Nó được phát hiện vào tháng 12 năm
              2019 ở Vũ Hán, Hồ Bắc, Trung Quốc.
            </h3>
            <p>
              Các dấu hiệu mắc bệnh phổ biến bao gồm các triệu chứng về đường hô hấp, sốt, ho, thở
              yếu và khó thở. Trong trường hợp nghiêm trọng hơn, mắc bệnh có thể gây viêm phổi, hội
              chứng hô hấp cấp tính nghiêm trọng, suy thận và thậm chí tử vong. <br />
              <br />
              Các khuyến nghị tiêu chuẩn để ngăn ngừa lây lan nhiễm trùng bao gồm rửa tay thường
              xuyên, che miệng và mũi khi ho và hắt hơi, nấu chín kỹ thịt và trứng. Tránh tiếp xúc
              gần với bất kỳ ai có triệu chứng bệnh hô hấp như ho và hắt hơi.
            </p>
          </Col>
          <Col xs={24} md={10} xl={8}>
            <MoreInfo />
          </Col>
        </Row>
      </div>
      <Row className={style['row-spread']} id="spread">
        <Col span={24}>
          <div className={style.info}>
            <h5 className={style.subtitle}>CORONAVIRUS LÂY LAN NHƯ THẾ NÀO</h5>
            <h2 className={style.title}>CÁC LÂY LAN CỦA COVID-19</h2>
            <p className={style.description}>
              Vì đây là một căn bệnh mới nên không biết chính xác cách thức mà coronavirus lây lan
              từ người này sang người khác. Lây lan qua nước bọt tương tự với các vi rút khác.
            </p>
          </div>
          <Row gutter={[20, 40]}>
            {spreads.map(spread => {
              return (
                <Col
                  key={spread.title}
                  xs={{ span: 24, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  xl={{ span: 8, offset: 0 }}>
                  <SpreadCard title={spread.title} content={spread.content} image={spread.image} />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Button className={style['btn-more-question']} type="primary" size="middle" shape="round">
          Bạn có câu hỏi gì về việc lan truyền của COVID-19?
        </Button>
      </Row>
    </div>
  );
};

export default About;
