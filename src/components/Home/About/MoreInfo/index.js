import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './index.module.less';
const items = [
  {
    title: 'How coronavirus is spread',
    url: '/',
  },
  {
    title: 'Symptoms of coronavirus',
    url: '/',
  },
  {
    title: 'Symptoms of coronavirus',
    url: '/',
  },
  {
    title: 'How to protect yourself',
    url: '/',
  },
  {
    title: 'Treatment for coronavirus',
    url: '/',
  },
  {
    title: 'Treatment for coronavirus',
    url: '/',
  },
  {
    title: 'Questions & Answers',
    url: '/',
  },
];
const AnotherQuestion = () => {
  return (
    <div className={style.container}>
      <ul>
        <li className={style.item}>What you need to know</li>
        {items.map((item, index) => {
          return (
            <li className={style.item} key={item.title}>
              <Link to={item.url} className={style.link}>
                {item.title}
                <RightOutlined className={style.icon} />
              </Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AnotherQuestion;
