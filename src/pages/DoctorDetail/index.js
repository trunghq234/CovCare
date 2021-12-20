import { Button, Card, Col, Image, Rate, Row } from 'antd';
import React from 'react';
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
    <div>
      <div className={styles.content}>
        <Row>
          <Col xl={12} lg={12} md={12} sm={24} xs={24} className={styles.doctorInfo}>
            <div>
              <p className={styles.doctorTittle}>{title}</p>
              <p className={styles.doctorName}>{name}</p>
              <Rate defaultValue={rate} className={styles.doctorRate} />
              <p className={styles.doctorPosition}>
                Position: <b>{position}</b>
              </p>
              <p className={styles.doctorExperience}>
                Experience: <b>{experience} years</b>
              </p>

              <div>
                <Button
                  size="large"
                  type="primary"
                  style={{ marginRight: '20px', marginBottom: '20px', fontSize: '1rem' }}>
                  Lorem ipsum dolor
                </Button>
                <Button size="large" style={{ fontSize: '1rem' }}>
                  Lorem ipsum dolor
                </Button>
              </div>
            </div>
          </Col>
          <Col xl={12} lg={12} md={12} sm={0} xs={0} className={styles.doctorImage}>
            <Image
              style={{ borderRadius: '30px' }}
              width={400}
              src="https://zos.alipayobjects.com/rmsportal/jkjgkEfvpUPVyRjUImniVslZfWPnJuuZ.png"
            />
          </Col>
        </Row>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.title}>Lorem ipsum dolor sit amet</p>

        <div>
          <Row gutter={[40, 8]} justify="space-around">
            {descriptions.map(item => (
              <Col xl={12} lg={12} md={24} sm={24}>
                <div>
                  <p className={styles.description}>{item.title}</p>
                </div>
              </Col>
            ))}
          </Row>
        </div>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.title}>Lorem ipsum</p>
        <div>
          <Row>
            <Col span={24}>
              <div className={styles.experience}>
                <p className={styles.year}>2011</p>
                <p className={styles.desExperience}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.experience}>
                <p className={styles.year}>2011</p>
                <p className={styles.desExperience}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </div>
            </Col>
            <Col span={24}>
              <div className={styles.experience}>
                <p className={styles.year}>2011</p>
                <p className={styles.desExperience}>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute
                  irure dolor in reprehenderit in voluptate
                </p>
              </div>
            </Col>
          </Row>
        </div>
      </div>

      <div className={styles.wrapper}>
        <p className={styles.title}>Lorem ipsum</p>

        <div>
          <Row gutter={[48, 8]}>
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
                  <p className={styles.desFooter}>20/11/2021</p>
                  <p className={styles.desFooter}>
                    Lorem: <b>Authoration</b>
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
                  <p className={styles.desFooter}>20/11/2021</p>
                  <p className={styles.desFooter}>
                    Lorem: <b>Authoration</b>
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
