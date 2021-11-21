import React from 'react';
import styles from './index.module.less';

export default function Time() {
  return (
    <div className={styles.wrapper}>
      <p className={styles.time}>07:00</p>
    </div>
  );
}
