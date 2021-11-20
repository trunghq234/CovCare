import React, { useState } from 'react';
import { Card, Steps } from 'antd';
import PersonalInfo from '../PersonalInfo';
import Agreement from '../Agreement';
import CompleteInfo from '../CompleteInfo';
import MedicalHistory from '../MedicalHistory';
import styles from './index.module.less';

const { Step } = Steps;

const RegisterForm = () => {
  const [current, setCurrent] = useState(0);
  const next = () => {
    setCurrent(current + 1);
  };

  const prev = () => {
    setCurrent(current - 1);
  };
  const steps = [
    {
      title: 'Thông tin cá nhân',
      content: <PersonalInfo next={next} />,
    },
    {
      title: 'Tiền sử bệnh',
      content: <MedicalHistory prev={prev} next={next} />,
    },
    {
      title: 'Phiếu đồng ý tiêm',
      content: <Agreement prev={prev} next={next} />,
    },
    {
      title: 'Hoàn thành',
      content: <CompleteInfo />,
    },
  ];
  return (
    <div className="container">
      <Card className={styles.card}>
        <Steps className={styles.steps} current={current}>
          {steps.map((item, index) => (
            <Step key={item.title} title={`Bước ${index + 1}`} description={item.title} />
          ))}
        </Steps>
      </Card>
      <div>{steps[current].content}</div>
    </div>
  );
};

export default RegisterForm;
