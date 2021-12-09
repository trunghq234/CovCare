import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Card, Col, Divider, Row } from 'antd';
import styles from './index.module.less';

const CompleteInfo = () => {
  const info = [
    {
      title: 'Họ và tên',
      value: 'Huỳnh Quang Trung',
    },
    {
      title: 'Ngày sinh',
      value: '23/04/2001',
    },
    {
      title: 'Giới tính',
      value: 'Nam',
    },
    {
      title: 'Số điện thoại',
      value: '0123456789',
    },
    {
      title: 'Số CMND/CCCD/Mã định danh công dân/HC',
      value: '079201001234',
    },
    {
      title: 'Số thẻ BHYT',
      value: 'SV7912891201',
    },
    {
      title: 'Địa chỉ hiện tại',
      value: '123 Võ Văn Ngân',
    },
    {
      title: 'Tỉnh/Thành phố',
      value: 'Thành phố Hồ Chí Minh',
    },
    {
      title: 'Quận/Huyện',
      value: 'Quận Thủ Đức',
    },
  ];
  return (
    <Card>
      <div className={styles.content}>
        <h3>
          Đăng ký tiêm chủng COVID-19 thành công. Mã đặt tiêm của bạn là{' '}
          <strong className={styles['highlight-green']}>VC-2304</strong>.
        </h3>
        <p>
          Cảm ơn quý khách đã đăng ký tiêm chủng vắc xin COVID-19. Hiện tại Bộ y tế đang tiến hành
          thu thập nhu cầu và thông tin để lập danh sách đối tượng đăng ký tiêm vắc xin COVID-19
          theo từng địa bàn. Chúng tôi sẽ liên hệ với quý khách theo số điện thoại{' '}
          <strong className={styles['highlight-blue']}>0123456789</strong> khi có kế hoạch tiêm
          trong thời gian sớm nhất.
        </p>
        <p>
          Mời bạn tải ứng dụng "SỔ SỨC KHỎE ĐIỆN TỬ" tại{' '}
          <strong>
            <a href="https://hssk.kcb.vn/#/sskdt">https://hssk.kcb.vn/#/sskdt</a>
          </strong>{' '}
          để theo dõi kết quả đăng ký tiêm và nhận chứng nhận tiêm chủng COVID-19
        </p>
      </div>
      <Row gutter={[20, 20]}>
        {info.map(item => (
          <Col span={8} className={styles.info}>
            <p>{item.title}</p>
            <p>
              <strong>{item.value}</strong>
            </p>
          </Col>
        ))}
      </Row>
      <Divider />
      <div className={styles.btn}>
        <Button type="primary" size="large">
          <Link to="">Trang chủ</Link>
        </Button>
      </div>
    </Card>
  );
};

export default CompleteInfo;
