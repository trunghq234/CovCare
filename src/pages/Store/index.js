import Banner from 'components/Store/Banner';
import StoreForm from 'components/Store/StoreForm';
import React from 'react';
import styles from './index.module.less';

export default function StorePage() {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <StoreForm />
    </div>
  );
}
