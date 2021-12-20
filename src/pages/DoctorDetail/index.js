import { Button, Card, Col, Image, Rate, Row } from 'antd';
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const doctor = {
  name: 'Trần Thế Anh',
  title: 'Giám đốc bệnh viện',
  rate: 4.5,
  position: 'Trưởng khoa',
  experience: 10,
};

const descriptions = [
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
  {
    title:
      ' Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
  },
];

const DoctorDetailPage = () => {
  const { name, title, rate, position, experience } = doctor;

  return (
    <div className="container">
      <Card style={{ marginTop: '20px' }}>
        <Row>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className={styles.doctorInfo}>
            <p className={styles.doctorTittle}>{title}</p>
            <p className={styles.doctorName}>{name}</p>
            <Rate defaultValue={rate} className={styles.doctorRate} />
            <p className={styles.doctorPosition}>
              Position: <b>{position}</b>
            </p>
            <p className={styles.doctorExperience}>
              Experience: <b>{experience} years</b>
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
              exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
              dolor in reprehenderit in voluptate
            </p>
            <Button size="large" type="primary" style={{ fontSize: '1rem', maxWidth: '200px' }}>
              <Link to="/appointment/register">Đăng ký khám</Link>
            </Button>
          </Col>
          <Col xl={12} lg={12} md={12} sm={0} xs={0} className={styles.doctorImage}>
            <Image
              style={{ borderRadius: '16px' }}
              width={280}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
      </Card>
      <div className={styles.wrapper}>
        <p className={styles.title}>Thông tin chi tiết</p>
        <Card>
          <Row gutter={[40, 8]} justify="space-around">
            {descriptions.map(item => (
              <Col xl={12} lg={12} md={24} sm={24}>
                <div>
                  <p className={styles.description}>{item.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </Card>
      </div>
      <div className={styles.wrapper}>
        <p className={styles.title}>Kinh nghiệm làm việc</p>
        <div>
          <Row gutter={[20, 20]}>
            <Col span={24}>
              <Card className={styles.experience}>
                <p className={styles.year}>2018</p>
                <p className={styles.desExperience}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </Card>
            </Col>
            <Col span={24}>
              <Card className={styles.experience}>
                <p className={styles.year}>2014</p>
                <p className={styles.desExperience}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </Card>
            </Col>
            <Col span={24}>
              <Card className={styles.experience}>
                <p className={styles.year}>2011</p>
                <p className={styles.desExperience}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </Card>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.title}>Đánh giá</p>

        <div>
          <Row gutter={[48, 8]}>
            <Col xl={12} lg={12} md={12} sm={24}>
              <Card title="Bác sĩ tận tâm" extra={<Rate defaultValue={5} />}>
                <p className={styles.review}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className={styles.footerCard}>
                  <p className={styles.desFooter}>20/11/2021</p>
                  <p className={styles.desFooter}>
                    Người viết: <b>Nguyễn Văn Mười</b>
                  </p>
                </div>
              </Card>
            </Col>
            <Col xl={12} lg={12} md={12} sm={24}>
              <Card title="Lorem ipsum" extra={<Rate defaultValue={4} />}>
                <p className={styles.review}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
                  pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
                  officia deserunt mollit anim id est laborum.
                </p>
                <div className={styles.footerCard}>
                  <p className={styles.desFooter}>25/11/2021</p>
                  <p className={styles.desFooter}>
                    Người viết: <b>Nguyễn Thị Mười</b>
                  </p>
                </div>
              </Card>
            </Col>
          </Row>
        </div>
      </div>
    </div>
  );
};

export default DoctorDetailPage;
