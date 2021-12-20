import { ArrowRightOutlined } from '@ant-design/icons';
import { Card, Col, Row, Button } from 'antd';
import ConfirmPhoneNumber from 'components/HealthDeclaration/ConfirmPhoneNumber';
import DomesticGuests from 'components/HealthDeclaration/DomesticGuests';
import DomesticMove from 'components/HealthDeclaration/DomesticMove';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const HealthDeclaration = () => {
  const [selectedCard, setSelectedCard] = useState(0); // 0: domestic move, !0: domestic guests
  const [isConfirm, setIsConfirm] = useState(false);
  return (
    <div className="container">
      <div style={{ marginTop: '60px' }} className="banner">
        <Row gutter={[20, 0]}>
          <Col xs={24} md={14} lg={12} xl={12}>
            <h3 className="title">Khai báo y tế</h3>
            <p>
              Việc khai báo thông tin hoàn toàn bảo mật và phục vụ cho chiến dịch phòng chống dịch
              bệnh COVID - 19.
            </p>
          </Col>
          <Col xs={0} md={10} lg={12} xl={12} />
          <Col xs={14} sm={6} md={4}>
            <Link to="/home">
              <Button style={{ color: '#2A81EA', paddingLeft: '0px' }} type="text" block ghost>
                Tìm hiểu về COVID-19 <ArrowRightOutlined />
              </Button>
            </Link>
          </Col>
        </Row>
      </div>
      <Row style={{ marginTop: '-140px' }} gutter={[40, 20]}>
        <Col span={12}>
          <Card
            className={styles.card}
            hoverable="true"
            onClick={() => {
              if (selectedCard === 1) {
                setIsConfirm(false);
              }
              setSelectedCard(0);
            }}
            style={{ color: selectedCard === 0 ? '#2a81ea' : 'black' }}>
            <div className={styles['card-content']}>
              <p>Di chuyển nội địa</p>
            </div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            className={styles.card}
            hoverable="true"
            style={{ color: selectedCard === 1 ? '#2a81ea' : 'black' }}
            onClick={() => {
              if (selectedCard === 0) {
                setIsConfirm(false);
              }
              setSelectedCard(1);
            }}>
            <div className={styles['card-content']}>
              <p>Toàn dân</p>
            </div>
          </Card>
        </Col>
        <Col span={24}>
          <Card style={{ width: '100%' }}>
            {!isConfirm && <ConfirmPhoneNumber setIsConfirm={setIsConfirm} />}
            {isConfirm && (selectedCard === 0 ? <DomesticMove /> : <DomesticGuests />)}
          </Card>
        </Col>
      </Row>
    </div>
  );
};
export default HealthDeclaration;
