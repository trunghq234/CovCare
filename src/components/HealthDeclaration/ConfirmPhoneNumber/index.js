import { Button, Form, Input, message } from 'antd';
import React, { useState } from 'react';
import { numberValidator } from 'utils/validator';
import styles from './index.module.less';

const ConfirmPhoneNumber = props => {
  const [sendOTP, setSendOTP] = useState(false);
  const [form] = Form.useForm();

  const handleSubmit = () => {
    setSendOTP(true);
    const { otp } = form.getFieldsValue();
    if (otp === '123456') {
      props.setIsConfirm(true);
    } else if (otp) {
      message.error('Mã xác thực không chính xác.');
    }
  };
  return (
    <div className={styles['container-confirm']}>
      <Form onFinish={handleSubmit} form={form}>
        <div className={styles['title-confirm']}>Nhập số điện thoại để xác thực</div>
        <Form.Item
          className={styles.item}
          rules={[
            { required: true, message: 'Bạn chưa nhập số điện thoại' },
            { validator: numberValidator },
          ]}
          name="phoneNumber">
          <Input
            placeholder="Nhập số điện thoại"
            className={styles['input-confirm']}
            disabled={sendOTP}
          />
        </Form.Item>
        {sendOTP && <div className={styles['title-confirm']}>Mã xác thực OTP</div>}
        {sendOTP && (
          <Form.Item
            className={styles.item}
            rules={[{ required: true, message: 'Bạn chưa nhập mã xác thực' }]}
            name="otp">
            <Input placeholder="Nhập mã xác thực" className={styles['input-confirm']} />
          </Form.Item>
        )}
        <Form.Item style={{ textAlign: 'center' }}>
          <Button type="primary" htmlType="submit" className={styles['btn-confirm']}>
            Nhận mã OTP
          </Button>
        </Form.Item>
        <Button type="text" className={styles.resend}>
          Gửi lại mã
        </Button>
      </Form>
    </div>
  );
};

export default ConfirmPhoneNumber;
