import { Card, Col, Image, Row, Table } from 'antd';
import React from 'react';
import birthday from '../../assets/svg/birthday.svg';
import card from '../../assets/svg/card.svg';
import man from '../../assets/svg/man.svg';
import styles from './index.module.less';
const Result = props => {
  const visible = props.visible;
  const columns = [
    {
      title: 'Mũi số',
      dataIndex: 'no',
      key: 'no',
      align: 'center',
    },
    {
      title: 'Thời gian tiêm',
      dataIndex: 'datetime',
      key: 'datetime',
      align: 'center',
    },
    {
      title: 'Tên vắc xin',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Số lô',
      dataIndex: 'lot',
      key: 'lot',
      align: 'center',
    },
    {
      title: 'Nơi niêm',
      dataIndex: 'location',
      key: 'location',
      align: 'center',
    },
  ];
  const dataSource = [
    {
      key: '1',
      no: '1',
      datetime: '20/10/2021 - 08:39',
      name: 'COVID-19 Vaccine (Vero Cell), Inactived (Sinopharm)',
      lot: 'B2021092999',
      location: 'TYT Thị Trấn Ea KNốp',
    },
    {
      key: '1',
      no: '2',
      datetime: '25/11/2021 - 08:51',
      name: 'COVID-19 Vaccine (Vero Cell), Inactived (Sinopharm)',
      lot: 'B2021103417	',
      location: 'TYT Thị Trấn Ea KNốp',
    },
  ];
  return (
    <div style={{ opacity: props.visible }}>
      <Row className={styles.result}>
        <Col xs={24} sm={24} md={18}>
          <div className={styles.header}>
            <p>CỘNG HÒA XÃ HỘI CHỦ NGHĨA VIỆT NAM</p>
            <p>Độc lập - Tự do - Hạnh phúc</p>
            <h2>CHỨNG NHẬN TIÊM CHỦNG COVID-19</h2>
          </div>
          <Row className={styles.content}>
            <Col xs={24} sm={24} md={8}>
              <p>Họ và tên</p>
              <p className={styles[`input-value`]}>Đỗ Văn Bảo</p>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <p>Ngày sinh</p>
              <p className={styles[`input-value`]}>10/01/2001</p>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <p>CCCD/HC</p>
              <p className={styles[`input-value`]}>066201007462</p>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <p>Số thẻ BHYT</p>
              <p className={styles[`input-value`]}>066201007462</p>
            </Col>
            <Col xs={24} sm={24} md={8}>
              <p>Số điện thoại</p>
              <p className={styles[`input-value`]}>066201007462</p>
            </Col>
            <Col span={24}>
              <p>Địa chỉ</p>
              <p className={styles[`input-value`]}>
                Thị trấn Ea Knốp - Huyện Ea Kar - Tỉnh Đắk Lắk
              </p>
            </Col>
            <Col span={24}>
              <p>Kết luận</p>
              <p className={styles[`input-value`]}>
                Đã được tiêm phòng vắc xin phòng bệnh Covid-19
              </p>
            </Col>
            <Table dataSource={dataSource} columns={columns} pagination={false}></Table>
          </Row>
        </Col>
        <Col className={styles.certificate} xs={24} sm={24} md={6}>
          <Row>
            <Col span={24} style={{ textAlign: 'center' }}>
              <Image
                src="https://tiemchungcovid19.gov.vn/assets/portal/img/u7.png"
                width="100px"></Image>
            </Col>
            <Col span={24} style={{ textAlign: 'center', marginBottom: '16px' }}>
              <h2 style={{ color: '#fff' }}>ĐÃ TIÊM 2 MŨI VĂC XIN</h2>
            </Col>
            <Col span={24} style={{ textAlign: 'center', marginBottom: '16px' }}>
              <Image
                src="data:image/png;base64,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"
                width="196px"></Image>
            </Col>
            <Col span={24}>
              <Card>
                <Row>
                  <div style={{ width: '30px' }}>
                    <Image src={man} className={styles.icon}></Image>
                  </div>
                  <div>
                    <p className={styles[`title`]}>Họ và tên</p>
                    <p className={styles[`input-value`]}>Đỗ Văn Bảo</p>
                  </div>
                </Row>
                <Row>
                  <div style={{ width: '30px' }}>
                    <Image src={birthday} className={styles.icon}></Image>
                  </div>
                  <div>
                    <p className={styles[`title`]}>Ngày sinh</p>
                    <p className={styles[`input-value`]}>10/01/2001</p>
                  </div>
                </Row>
                <Row>
                  <div style={{ width: '30px' }}>
                    <Image src={card} className={styles.icon}></Image>
                  </div>
                  <div>
                    <p className={styles[`title`]}>CCCD/HC</p>
                    <p className={styles[`input-value`]}>066201007462</p>
                  </div>
                </Row>
              </Card>
            </Col>
          </Row>
        </Col>
      </Row>
    </div>
  );
};

export default Result;
