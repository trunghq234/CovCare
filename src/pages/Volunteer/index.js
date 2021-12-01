import VolunteerForm from 'components/Volunteer/VolunteerForm';
import React from 'react';
import styles from './index.module.less';

export default function Volunteer() {
  return (
    <div className={styles.wrapper}>
      <h3>Form Đăng Ký Tình Nguyện Viên Hỗ Trợ Mùa Dịch Covid</h3>

      <VolunteerForm />
    </div>
  );
}
