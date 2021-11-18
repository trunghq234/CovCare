import React, { useState } from 'react';
import { Card, Steps } from 'antd';
import PersonalInfo from '../PersonalInfo';
import Agreement from '../Agreement';
import CompleteInfo from '../CompleteInfo';
import MedicalHistory from '../MedicalHistory';

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
      <Card style={{ marginTop: '-100px' }}>
        <Steps current={current}>
          {steps.map(item => (
            <Step key={item.title} title={item.title} />
          ))}
        </Steps>
      </Card>
      <div>{steps[current].content}</div>
    </div>
  );
};

export default RegisterForm;
