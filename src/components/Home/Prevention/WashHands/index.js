import React from 'react';
import styles from './index.module.less';

const WashHands = ({ step }) => {
  return (
    <div>
      <img className={styles.image} src={step.image} alt={step.content} />
      <h5 className={styles.content}>{step.content} </h5>
    </div>
  );
};

export default WashHands;
