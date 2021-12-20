import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './index.module.less';
const items = [
  {
    title: 'Coronavirus lây lan như thế nào',
    url: '#spread',
  },
  {
    title: 'Các triệu chứng của coronavirus',
    url: '#symptons',
  },
  {
    title: 'Làm thế nào để bảo vệ bản thân',
    url: '#prevention',
  },
  {
    title: 'Điều trị coronavirus',
    url: '#treatment',
  },
  {
    title: 'Hỏi & Đáp',
    url: '#faq',
  },
];
const AnotherQuestion = () => {
  return (
    <div className={style.container}>
      <ul>
        <li className={style.item}>Những gì bạn cần biết</li>
        {items.map((item, index) => {
          return (
            <li className={style.item} key={item.title}>
              <a href={item.url} className={style.link}>
                {item.title}
                <RightOutlined className={style.icon} />
              </a>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default AnotherQuestion;
