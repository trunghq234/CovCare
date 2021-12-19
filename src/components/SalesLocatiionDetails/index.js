import { Carousel, Col, Divider, Drawer, Row } from 'antd';
import clockIcon from 'assets/svg/clock.svg';
import locationIcon from 'assets/svg/location.svg';
import phoneIcon from 'assets/svg/phone.svg';
import React from 'react';
import styles from './index.module.less';

const SalesLocationDetails = props => {
  const { location, visible, setVisible } = props;
  return (
    <Drawer visible={visible} onClose={() => setVisible(false)}>
      <div>
        <h2 className="heading">{location.title}</h2>
        <Divider />
      </div>
      <Row gutter={[20, 40]}>
        <Col span={24}>
          <div className={styles.info}>
            <img className={styles.icon} src={locationIcon} alt="" />
            <span className={styles.title}>{location.address}</span>
          </div>
        </Col>
        <Col span={24}>
          <img className={styles.icon} src={phoneIcon} alt="" />
          <span className={styles.title}>{location.phone}</span>
        </Col>
        <Col span={24}>
          <img className={styles.icon} src={clockIcon} alt="" />
          <span className={styles.title}>{location.open}</span>
        </Col>
      </Row>
      <Divider />
      <h4 className="heading">Hình ảnh</h4>
      <Carousel autoplay>
        {location.images.map(element => (
          <div>
            <img style={{ width: '100%', height: '270px' }} src={element} alt="" />
          </div>
        ))}
      </Carousel>
      ,
    </Drawer>
  );
};

export default SalesLocationDetails;
