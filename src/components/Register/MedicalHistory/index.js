import React from 'react';
import { Button, Card, Col, Divider, Input, Radio, Row } from 'antd';
import styles from './index.module.less';

const MedicalHistory = ({ prev, next }) => {
  const symptoms = [
    {
      name: '1. Tiền sử phản vệ từ độ 2 trở lên',
      extra: true,
    },
    {
      name: '2. Tiền sử bị COVID-19 trong vòng 6 tháng',
      extra: false,
    },
    {
      name: '3. Tiền sử tiêm vắc xin khác trong 14 ngày qua',
      extra: true,
    },
    {
      name: '4. Tiền sử suy giảm miễn dịch, ung thư giai đoạn cuối, cắt lách, xơ gan mất bù ...',
      extra: false,
    },
    {
      name: '5. Đang dùng thuốc ức chế miễn dịch, corticoid liều ca (tương đương hoặc hơn 2mg prednisolon/kg/ngày trong ít nhất 7 ngày) hoặc điều trị hóa trị, xạ trị',
      extra: false,
    },
    {
      name: '6. Bệnh cấp tính',
      extra: true,
    },
    {
      name: '7. Tiền sử bệnh mạn tính, đang tiến triển',
      extra: true,
    },
    {
      name: '8. Tiền sử bệnh mạn tính đã điều trị ổn',
      extra: false,
    },
    {
      name: '9. Đang mang thai, phụ nữ đang nuôi con bằng sữa mẹ',
      extra: false,
    },
    {
      name: '10. Độ tuổi: ≥65 tuổi',
      extra: false,
    },
    {
      name: '11. Tiền sử rối loạn đông máu/cầm máu hoặc đang dùng thuốc chống đông',
      extra: false,
    },
    {
      name: '12. Tiền sử dị ứng với các dị nguyên khác',
      extra: true,
    },
  ];

  return (
    <Card>
      <Row gutter={[20, 20]} justify="center">
        <Col span={12}>
          <strong>Tiền sử</strong>
        </Col>
        <Col span={6}>
          <strong>Triệu chứng</strong>
        </Col>
        <Col className={styles.centered} span={2}>
          <strong>Có</strong>
        </Col>
        <Col className={styles.centered} span={2}>
          <strong>Không</strong>
        </Col>
        <Col className={styles.centered} span={2}>
          <strong>Không rõ</strong>
        </Col>
        {symptoms.map((symptom, index) => {
          return (
            <Col span={24}>
              <Row gutter={[20, 0]}>
                <Col span={12}>{symptom.name}</Col>
                <Col span={6}>{symptom.extra ? <Input placeholder="Nếu có, ghi rõ" /> : ''}</Col>
                <Col span={6}>
                  <Radio.Group className={styles.flex} defaultValue={2}>
                    <Row>
                      <Col style={{ textAlign: 'center' }} span={8}>
                        <Radio value={1} />
                      </Col>
                      <Col style={{ textAlign: 'center' }} span={8}>
                        <Radio value={2} />
                      </Col>
                      <Col style={{ textAlign: 'center' }} span={8}>
                        <Radio value={3} />
                      </Col>
                    </Row>
                  </Radio.Group>
                </Col>
              </Row>
              <Divider />
            </Col>
          );
        })}
        <Col flex="auto" />
        <Col span={4}>
          <Button type="default" size="large" block onClick={prev}>
            Quay lại
          </Button>
        </Col>
        <Col span={4}>
          <Button type="primary" size="large" block onClick={next}>
            Xác nhận
          </Button>
        </Col>
        <Col flex="auto" />
      </Row>
    </Card>
  );
};

export default MedicalHistory;
