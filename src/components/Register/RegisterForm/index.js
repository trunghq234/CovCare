import React, { useState } from 'react';
import { Button, message, Card, Steps } from 'antd';
import PersonalInfo from '../PersonalInfo';
import Agreement from '../Agreement';

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
      content: 'Second-content',
    },
    {
      title: 'Phiếu đồng ý tiêm',
      content: <Agreement />,
    },
    {
      title: 'Hoàn thành',
      content: 'Last-content',
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
      <div className="steps-content">{steps[current].content}</div>
      <div className="steps-action">
        {current < steps.length - 1 && (
          <Button type="primary" onClick={() => next()}>
            Next
          </Button>
        )}
        {current === steps.length - 1 && (
          <Button type="primary" onClick={() => message.success('Processing complete!')}>
            Done
          </Button>
        )}
        {current > 0 && (
          <Button style={{ margin: '0 8px' }} onClick={() => prev()}>
            Previous
          </Button>
        )}
      </div>
    </div>
  );
};

export default RegisterForm;
