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
          <Button style={{ padding: '4px 15px' }} type="primary" onClick={showDrawer}>
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
              <Menu.Item key="home">
                <NavLink to="/">Trang chủ</NavLink>
              </Menu.Item>
              <Menu.Item key="symptons">
                <NavLink to="/symptons">Symptons</NavLink>
              </Menu.Item>
              <Menu.Item key="news">
                <NavLink to="/news">Tin tức</NavLink>
              </Menu.Item>
              <Menu.Item key="support">
                <NavLink to="/support">Hỗ trợ</NavLink>
              </Menu.Item>
              <Menu.Item key="health-declaration">
                <NavLink to="/health-declaration">Khai báo y tế</NavLink>
              </Menu.Item>
              <Menu.Item key="support-request">
                <NavLink to="/help">Yêu cầu hỗ trợ</NavLink>
              </Menu.Item>
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
            <Menu.Item key="home">
              <NavLink to="/">Trang chủ</NavLink>
            </Menu.Item>
            <Menu.Item key="news">
              <NavLink to="/news">Tin tức</NavLink>
            </Menu.Item>
            <Menu.Item key="support">
              <NavLink to="/support">Hỗ trợ</NavLink>
            </Menu.Item>
            <Menu.Item key="health-declaration">
              <NavLink to="/health-declaration">Khai báo y tế</NavLink>
            </Menu.Item>
            <Menu.Item key="support-request">
              <NavLink to="/help">Yêu cầu hỗ trợ</NavLink>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
