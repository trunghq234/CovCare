import StoreForm from 'components/Store/StoreForm';
import React from 'react';
import styles from './index.module.less';

export default function StorePage() {
  return (
    <div className={styles.wrapper}>
      <h3>Form Đăng Ký Cửa Hàng Tiện Lợi Hỗ Trợ Mùa Dịch Covid</h3>

      <StoreForm />
    </div>
  );
}
