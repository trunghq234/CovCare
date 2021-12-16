import { Card, Col, Row } from 'antd';
import ConfirmPhoneNumber from 'components/HealthDeclaration/ConfirmPhoneNumber';
import DomesticGuests from 'components/HealthDeclaration/DomesticGuests';
import DomesticMove from 'components/HealthDeclaration/DomesticMove';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

const HealthDeclaration = () => {
  const [selectedCard, setSelectedCard] = useState(0); // 0: domestic move, !0: domestic guests
  const [isConfirm, setIsConfirm] = useState(false);
  return (
    <div className="container">
      <Row className={styles['title-container']} justify="center">
        <Col span={24} className={styles.title}>
          Khai báo y tế
        </Col>
        <Col xs={24} sm={18} lg={12} xl={10} className={styles.description}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh ultrices quam in eu lobortis
          nullam consectetur. Purus sagittis orci eu faucibus.
        </Col>
        <Col span={24}>
          <NavLink className={styles.link} to="/">
            Tìm hiểu về COVID 19
          </NavLink>
        </Col>
      </Row>
      <Row gutter={[40, 20]}>
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
