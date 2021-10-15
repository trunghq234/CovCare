import React from 'react';
import { RightOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom';
import style from './index.module.less';

const AnotherQuestion = () => {
  return (
    <div className={style.container}>
      <ul>
        <li className={style.item}>What you need to know</li>
        <li className={style.item}>
          <Link className={style.link}>
            How coronavirus is spread
            <RightOutlined className={style.icon} />
          </Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>
            Symptoms of coronavirus
            <RightOutlined className={style.icon} />
          </Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>
            How to protect yourself
            <RightOutlined className={style.icon} />
          </Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>
            Treatment for coronavirus
            <RightOutlined className={style.icon} />
          </Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>
            Myth-Busters of coronavirus
            <RightOutlined className={style.icon} />
          </Link>
        </li>
        <li className={style.item}>
          <Link className={style.link}>
            Questions&answers
            <RightOutlined className={style.icon} />
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default AnotherQuestion;
