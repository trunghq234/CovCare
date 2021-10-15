import React from 'react';
import style from './index.module.less';

const SpreadCard = props => {
  const { title, content, image } = props;
  return (
    <div className={style.container}>
      <div className={style['box-image']}>
        <img className={style.image} src={image} alt={title}></img>
      </div>
      <div className={style['box-content']}>
        <h5>{title}</h5>
        <p>{content}</p>
      </div>
    </div>
  );
};

export default SpreadCard;
