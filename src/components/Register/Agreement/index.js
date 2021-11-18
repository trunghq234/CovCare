import { Button, Card, Checkbox, Col, Divider, Modal, notification, Row } from 'antd';
import React, { useState } from 'react';
import styles from './index.module.less';
import logo from 'assets/images/Logo_Light.png';
import OtpInput from 'react-otp-input';

const Agreement = ({ prev, next }) => {
  const rules = [
    'Tiêm chủng vắc xin là biện pháp phòng chống dịch hiệu quả, tuy nhiên vắc xin phòng COVID-19 có thể không phòng được bệnh hoàn toàn. Người được tiêm chủng vắc xin phòng COVID-19 có thể phòng được bệnh hoặc giảm mức độ nặng nếu mắc bệnh. Tuy nhiên, sau khi tiêm chủng vẫn phải tiếp tục thực hiện nghiêm các biện pháp phòng chống dịch theo quy định.',
    'Tiêm chủng vắc xin phòng COVID-19 có thể gây ra một số biểu hiện tại chỗ tiêm hoặc toàn thân như sưng, đau chỗ tiêm, nhức đầu, buồn nôn, sốt, đau cơ…hoặc tai biến nặng sau tiêm chủng. Tiêm vắc xin mũi 2 do Pfizer sản xuất ở người đã tiêm mũi 1 bằng vắc xin AstraZeneca có thể tăng khả năng xảy ra phản ứng thông thường sau tiêm chủng.',
    'Khi có triệu chứng bất thường về sức khỏe, người được tiêm chủng cần đến ngay cơ sở y tế gần nhất để được tư vấn, thăm khám và điều trị kịp thời.',
  ];
  const [isAgree, setIsAgree] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [otp, setOtp] = useState();

  return (
    <Card>
      <ol className={styles.content}>
        {rules.map(rule => (
          <li>{rule}</li>
        ))}
      </ol>
      <Divider />
      <Row gutter={[20, 20]} justify="center">
        <Col span={12}>
          <p>Sau khi đã đọc các thông tin nêu trên, tôi đã hiểu về các nguy cơ và: </p>
        </Col>
        <Col span={12}>
          <Checkbox onClick={e => setIsAgree(e.target.checked)}>Đồng ý tiêm chủng</Checkbox>
        </Col>
        <Col flex="auto" />
        <Col span={4}>
          <Button type="default" size="large" block onClick={prev}>
            Quay lại
          </Button>
        </Col>
        <Col span={4}>
          <Button
            type="primary"
            size="large"
            block
            disabled={!isAgree}
            onClick={() => setIsVisible(true)}>
            Xác nhận
          </Button>
        </Col>
        <Col flex="auto" />
      </Row>
      <Modal
        title="Xác thực OTP"
        visible={isVisible}
        onCancel={() => {
          setOtp('');
          setIsVisible(false);
        }}
        onOk={() => {
          if (otp === '123456') {
            setIsVisible(false);
            next();
            notification.success({ message: 'Xác thực OTP thành công!' });
          } else {
            notification.error({ message: 'Mã xác thực không chính xác!' });
          }
        }}>
        <div className={styles.otp}>
          <img alt="logo" src={logo} height="200px" width="200px" />
          <p>
            Mã xác thực sẽ được gửi bằng tin nhắn <br></br> đến số điện thoại đăng ký
          </p>
          <OtpInput
            isInputNum
            value={otp}
            onChange={e => setOtp(e)}
            inputStyle={styles['otp-input']}
            numInputs={6}
            separator={<span>-</span>}
            hasErrored
          />
        </div>
      </Modal>
    </Card>
  );
};

export default Agreement;
