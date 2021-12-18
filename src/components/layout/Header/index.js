import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Dropdown, Menu } from 'antd';
import logo from 'assets/images/logo.png';
import React, { useState } from 'react';
import { useHistory } from 'react-router';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

const AppHeader = () => {
  const history = useHistory();

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
      link: '/health-declaration',
      display: 'Khai báo y tế',
    },
    {
      link: '/map',
      display: 'Bản đồ',
    },
  ];
  const onClick = ({ key }) => {
    switch (key) {
      case '1':
        history.push('./search');
        break;
      case '2':
        history.push('./lookup-injection-registration');
        break;
      default:
        history.push('./search-complaint');
        break;
    }
  };
  const menu = (
    <Menu onClick={onClick}>
      <Menu.Item key="1">Tra cứu chứng nhận tiêm</Menu.Item>
      <Menu.Item key="2">Tra cứu kết quả đăng ký</Menu.Item>
      <Menu.Item key="3">Tra cứu phản ánh</Menu.Item>
    </Menu>
  );
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
                // setVisible(false);
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
              <Menu.Item key="search">
                {/* <NavLink to="/search">Tra cứu</NavLink> */}
                <Dropdown overlay={menu} trigger={['click']}>
                  <p className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                    Tra cứu <DownOutlined />
                  </p>
                </Dropdown>
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
            {menuItems.map(item => (
              <Menu.Item key={item.link}>
                <NavLink to={item.link}>{item.display}</NavLink>
              </Menu.Item>
            ))}
            <Menu.Item key="search">
              <Dropdown overlay={menu}>
                <span className="ant-dropdown-link" onClick={e => e.preventDefault()}>
                  Tra cứu <DownOutlined />
                </span>
              </Dropdown>
            </Menu.Item>
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
