import { Col, Pagination, Row } from 'antd';
import React from 'react';
import Doctor from './Doctor/Doctor';
import styles from './index.module.less';

const DoctorList = ({ doctors }) => {
  return (
    <div className={styles.wrapper}>
      <Row gutter={[0, 24]}>
        {doctors.map((doctor, idx) => (
          <Col span={24} key={idx}>
            <Doctor doctor={doctor} />
          </Col>
        ))}
      </Row>
      <div style={{ display: 'flex', justifyContent: 'center', margin: '20px 0' }}>
        <Pagination defaultCurrent={1} total={50}></Pagination>
      </div>
    </div>
  );
};

export default DoctorList;
