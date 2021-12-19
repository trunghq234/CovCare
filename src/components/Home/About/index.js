import { Button, Col, Row } from 'antd';
import React from 'react';
import MoreInfo from './MoreInfo';
import style from './index.module.less';
import SpreadCard from './SpreadCard';

import about_a from 'assets/images/about-a.png';
import about_b from 'assets/images/about-b.png';
import about_c from 'assets/images/about-c.png';

const spreads = [
  {
    title: 'Person-to-person spread as close contact with infected',
    content:
      'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.',
    image: about_a,
  },
  {
    title: 'Touching or contact with infected surfaces or objects',
    content:
      'A person can get COVID-19 by touching a surface or object that has the virus on it and then touching their own mouth, nose, or possibly their eyes.',
    image: about_b,
  },
  {
    title: 'Droplets that from infected person coughs or sneezes',
    content:
      'The coronavirus is thought to spread mainly from person to person. This can happen between people who are in close contact with one another.',
    image: about_c,
  },
];

const About = () => {
  return (
    <div>
      <div className="container">
        <Row gutter={[40, 20]} className={style['row-about']}>
          <Col xs={24} md={14} xl={16}>
            <h4 className={style.name}>ABOUT THE DISEASE</h4>
            <h1 className={style.title}>CORONAVIRUS (COVID-19)</h1>
            <h3>
              <strong>COVID-19 is a new illness that can affect your lungs and airways.</strong>{' '}
              It's caused by a virus called coronavirus. It was discovered in December 2019 in
              Wuhan, Hubei, China.
            </h3>
            <p>
              Common signs of infection include respiratory symptoms, fever, cough, shortness of
              breath and breathing difficulties. In more severe cases, infection can cause
              pneumonia, severe acute respiratory syndrome, kidney failure and even death. <br />
              <br />
              Standard recommendations to prevent infection spread include regular hand washing,
              covering mouth and nose when coughing and sneezing, thoroughly cooking meat and eggs.
              Avoid close contact with anyone showing symptoms of respiratory illness such as
              coughing and sneezing.
            </p>
          </Col>
          <Col xs={24} md={10} xl={8}>
            <MoreInfo />
          </Col>
        </Row>
      </div>
      <Row className={style['row-spread']}>
        <Col span={24}>
          <div className={style.info}>
            <h4 className={style.question}>HOW CORONAVIRUS IS SPREAD</h4>
            <h1 className={style['transmission-title']}>TRANSMISSION OF COVID-19</h1>
            <p className={style.description}>
              Because it's a new illness, we do not know exactly how coronavirus spreads from person
              to person. Similar viruses are spread in cough droplets.
            </p>
          </div>
          <Row gutter={[20, 40]}>
            {spreads.map(spread => {
              return (
                <Col
                  key={spread.title}
                  xs={{ span: 24, offset: 0 }}
                  md={{ span: 8, offset: 0 }}
                  xl={{ span: 8, offset: 0 }}>
                  <SpreadCard title={spread.title} content={spread.content} image={spread.image} />
                </Col>
              );
            })}
          </Row>
        </Col>
        <Button className={style['btn-more-question']} type="primary" size="middle" shape="round">
          Have question about spreading?
        </Button>
      </Row>
    </div>
  );
};

export default About;
