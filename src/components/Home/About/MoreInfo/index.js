import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './index.module.less';
const items = [
  {
    title: 'Coronavirus lây lan như thế nào',
    url: '/',
  },
  {
    title: 'Các triệu chứng của coronavirus',
    url: '/',
  },
  {
    title: 'Làm thế nào để bảo vệ bản thân',
    url: '/',
  },
  {
    title: 'Điều trị coronavirus',
    url: '/',
  },
  {
    title: 'Điều trị coronavirus',
    url: '/',
  },
  {
    title: 'Hỏi & Đáp',
    url: '/',
  },
];
const AnotherQuestion = () => {
  return (
    <div className={style.container}>
      <ul>
        <li className={style.item}>Nhưng gì bạn cần biết</li>
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
