import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { Menu, Drawer, Button } from 'antd';
import { MenuOutlined } from '@ant-design/icons';
import logo from 'assets/images/logo.png';
import styles from './index.module.less';

const AppHeader = () => {
  const [pathname, setPathname] = useState(window.location.pathname.substring(1) || 'home');
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  const menuItems = [
    {
      link: '/',
      display: 'Trang chủ',
    },
    {
      link: '/news',
      display: 'Tin tức',
    },
    {
      link: '/support',
      display: 'Hỗ trợ',
    },
    {
      link: '/register',
      display: 'Đăng ký',
    },
    {
      link: '/store',
      display: 'Đăng ký cửa hàng',
    },
    {
      link: '/volunteer',
      display: 'Tình nguyện viên',
    },
  ];
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/">
            <img src={logo} alt="logo" />
            CovCare
          </NavLink>
        </div>
        <div className="mobileVisible">
          <Button className={styles.drawer} type="primary" onClick={showDrawer}>
            <MenuOutlined />
          </Button>
          <Drawer placement="right" onClose={onClose} visible={visible}>
            <Menu
              onClick={e => {
                setPathname(e.key);
                setVisible(false);
              }}
              selectedKeys={pathname}
              theme="light"
              mode="vertical"
              inlineCollapsed={false}>
              {menuItems.map(item => (
                <Menu.Item key={item.link}>
                  <NavLink to={item.link}>{item.display}</NavLink>
                </Menu.Item>
              ))}
            </Menu>
          </Drawer>
        </div>
        <div className="mobileHidden">
          <Menu
            onClick={e => setPathname(e.key)}
            selectedKeys={pathname}
            theme="light"
            mode="horizontal"
            disabledOverflow="true">
            {menuItems.map(item => (
              <Menu.Item key={item.link}>
                <NavLink to={item.link}>{item.display}</NavLink>
              </Menu.Item>
            ))}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
