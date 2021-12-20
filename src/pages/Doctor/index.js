import React from 'react';
import { Col, Row } from 'antd';
import { Search, Filter, DoctorList } from 'components/Doctor';
import styles from './index.module.less';
import Banner from 'components/Doctor/Banner';

const doctors = [
  {
    name: 'Trần Thế Anh',
    title: 'Giám đốc bệnh viện',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Huỳnh Quang Trung',
    title: 'Trưởng khoa sản',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Đỗ Văn Bảo',
    title: 'Trưởng khoa tim',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Phan Ngọc Quang',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
  {
    name: 'Trần Thế Anh',
    title: 'Trưởng khoa răng hàm mặt',
    rate: 4.5,
    position: 'Trưởng khoa',
    experience: 10,
  },
];

const DoctorPage = () => {
  return (
    <div className={styles.wrapper}>
      <Row gutter={[20, 20]}>
        <Col xl={24}>
          <Banner />
        </Col>
        <Col span={24}>
          <Search />
        </Col>
        <Col xs={24} lg={7} xl={5}>
          <Filter />
        </Col>
        <Col xs={24} lg={17} xl={19}>
          <DoctorList doctors={doctors} />
        </Col>
      </Row>
    </div>
  );
};

export default DoctorPage;
