import React from 'react';
import styles from './index.module.less';

const AdviceBox = props => {
  return (
    <div style={{ textAlign: 'center' }}>
      <img className={styles.image} src={props.img} alt={props.title} />
      <h5 className={styles.title}>{props.title}</h5>
      <p className={styles.content}>{props.content}</p>
    </div>
  );
};

export default AdviceBox;
