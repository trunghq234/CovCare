import { Card, Col, Row } from 'antd';
import React from 'react';
import doctor from 'assets/images/doctor.png';
import styles from './index.module.less';

const AdviceCard = () => {
  const stepsToProtect = [
    {
      title: 'Stay home if you’re sick',
      content: '– Stay home if you are sick, except to get medical care.',
    },
    {
      title: 'Cover your mouth and nose',
      content:
        '– with a tissue when you cough or sneeze (throw used tissues in the trash) or use the inside of your elbow.',
    },
    {
      title: 'Wear a facemask if you are sick',
      content:
        '– You should wear a facemask when you are around other people (e.g., sharing a room or vehicle) and before you enter a healthcare provider’s',
    },
    {
      title: 'Clean AND disinfect frequently touched surfaces daily',
      content:
        '– This includes phones, tables, light switches, doorknobs, countertops, handles, desks, toilets, faucets, and sinks.',
    },
    {
      title: 'Clean the dirty surfaces',
      content: '– Use detergent or soap and water prior to disinfection.',
    },
    {
      title: 'Stay informed about the local COVID-19 situation',
      content:
        '– Get up-to-date information about local COVID-19 activity from public health officials.',
    },
    {
      title: 'Dedicated, lined trash can',
      content:
        '– If possible, dedicate a lined trash can for the ill person. Use gloves when removing garbage bags, and handling & disposing of trash.',
    },
  ];

  return (
    <Card style={{ padding: '10px' }}>
      <h4 className={styles.title}>Take steps to protect others</h4>
      <Row gutter={[40]}>
        <Col xs={24} xl={16}>
          <ul>
            {stepsToProtect.map((step, index) => {
              return (
                <li key={index} className={styles.step}>
                  <strong>{step.title} </strong>
                  {step.content}
                </li>
              );
            })}
          </ul>
        </Col>
        <Col xs={0} xl={8}>
          <img className={styles.image} src={doctor} alt="doctor" />
        </Col>
      </Row>
    </Card>
  );
};

export default AdviceCard;
