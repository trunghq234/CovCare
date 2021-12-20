import { Card, Col, Row } from 'antd';
import React from 'react';
import doctor from 'assets/images/doctor.png';
import styles from './index.module.less';

const AdviceCard = () => {
  const stepsToProtect = [
    {
      title: 'Ở trong nhà nếu bạn bị ốm',
      content: '– Hãy ở nhà nếu bạn bị ốm, trừ khi được chăm sóc y tế ở trạm y tế.',
    },
    {
      title: 'Che miệng và mũi của bạn',
      content:
        '– Bằng khăn giấy khi bạn ho hoặc hắt hơi (vứt khăn giấy đã qua sử dụng vào thùng rác) hoặc sử dụng mặt trong của khuỷu tay.',
    },
    {
      title: 'Đeo khẩu trang nếu bạn bị ốm',
      content:
        '– Bạn nên đeo khẩu trang khi ở gần những người khác (ví dụ: ở chung phòng hoặc xe cộ) và trước khi bạn vào nhà cung cấp dịch vụ chăm sóc sức khỏe',
    },
    {
      title: 'Làm sạch và khử trùng các bề mặt thường xuyên chạm vào hàng ngày',
      content:
        '– Điều này bao gồm điện thoại, bảng, công tắc đèn, tay nắm cửa, mặt bàn, tay cầm, bàn làm việc, nhà vệ sinh, vòi nước và bồn rửa.',
    },
    {
      title: 'Làm sạch bề mặt bẩn',
      content: '– Sử dụng chất tẩy rửa hoặc xà phòng và nước trước khi khử trùng.',
    },
    {
      title: 'Cập nhật thông tin về tình hình COVID-19 tại địa phương',
      content:
        '– Nhận thông tin cập nhật về hoạt động COVID-19 tại địa phương từ các quan chức y tế công cộng.',
    },
    {
      title: 'Thùng rác chuyên dụng có túi lót',
      content:
        '– Nếu có thể, hãy dành một thùng rác có lót bạt cho người bệnh. Sử dụng găng tay khi loại bỏ túi rác, xử lý và vứt bỏ thùng rác.',
    },
  ];

  return (
    <Card style={{ padding: '10px' }}>
      <h4 className={styles.title}>Thực hiện các bước để bảo vệ bản thân và người khác</h4>
      <Row gutter={[40]}>
        <Col xs={24} xl={16}>
          <ul>
            {stepsToProtect.map((step, index) => {
              return (
                <li key={index} className={styles.step}>
                  <strong>{step.title} </strong>
                  {step.content}
                </li>
              );
            })}
          </ul>
        </Col>
        <Col xs={0} xl={8}>
          <img className={styles.image} src={doctor} alt="doctor" />
        </Col>
      </Row>
    </Card>
  );
};

export default AdviceCard;
