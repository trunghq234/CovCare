import React from 'react';
import { Link } from 'react-router-dom';
import styles from './index.module.less';

const AppFooter = () => {
  return (
    <div className={styles.footer}>
      <p>
        <Link to="/aboutus">QBAT ©2021</Link>
      </p>
    </div>
  );
};

export default AppFooter;
