import Banner from 'components/Volunteer/Banner';
import VolunteerForm from 'components/Volunteer/VolunteerForm';
import React from 'react';
import styles from './index.module.less';

export default function VolunteerPage() {
  return (
    <div className={styles.wrapper}>
      <Banner />
      <VolunteerForm />
    </div>
  );
}
