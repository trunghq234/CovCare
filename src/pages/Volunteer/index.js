import VolunteerForm from 'components/Volunteer/VolunteerForm';
import React from 'react';
import styles from './index.module.less';

export default function VolunteerPage() {
  return (
    <div className={styles.wrapper}>
      <h3>Form đăng ký tình nguyện viên mùa Covid</h3>

      <VolunteerForm />
    </div>
  );
}
