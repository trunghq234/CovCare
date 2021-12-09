import { Card, Col, Row } from 'antd';
import DomesticGuests from 'components/HealthDeclaration/DomesticGuests';
import DomesticMove from 'components/HealthDeclaration/DomesticMove';
import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

const HealthDeclaration = () => {
  const [selectedCard, setSelectedCard] = useState(0); // 0: domestic move, !0: domestic guests

  return (
    <div className="container">
      <Row>
        <div className={styles['title-container']}>
          <div className={styles.title}>Khai báo y tế</div>
          <div className={styles.description}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh ultrices quam in eu
            lobortis nullam consectetur. Purus sagittis orci eu faucibus.
          </div>
          <NavLink className={styles.link} to="/">
            Tìm hiểu về COVID 19
          </NavLink>
        </div>
      </Row>
      <Row gutter={40}>
        <Col span={12}>
          <Card
            className={styles.card}
            hoverable="true"
            onClick={() => setSelectedCard(0)}
            style={{ color: selectedCard === 0 ? '#2a81ea' : 'black' }}>
            <div className={styles['card-content']}>Di chuyển nội địa</div>
          </Card>
        </Col>
        <Col span={12}>
          <Card
            className={styles.card}
            hoverable="true"
            style={{ color: selectedCard === 1 ? '#2a81ea' : 'black' }}
            onClick={() => {
              setSelectedCard(1);
            }}>
            <div className={styles['card-content']}>Toàn dân</div>
          </Card>
        </Col>
      </Row>
      <Row className={styles['form-container']}>
        <Card>{selectedCard === 0 ? <DomesticMove /> : <DomesticGuests />}</Card>
      </Row>
    </div>
  );
};

export default HealthDeclaration;
