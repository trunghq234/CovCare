import React from 'react';
import style from './index.module.less';

const NewsCard = props => {
  const { title, content, image } = props;
  return (
    <div className={style.container}>
      <img className={style.image} src={image} alt={title}></img>
      <h5>{title}</h5>
      <p>{content}</p>
    </div>
  );
};

export default NewsCard;
