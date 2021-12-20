import { DownOutlined, MenuOutlined } from '@ant-design/icons';
import { Button, Drawer, Menu } from 'antd';
import logo from 'assets/images/logo.png';
import React, { useEffect, useState } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

const { SubMenu } = Menu;
const AppHeader = () => {
  const [pathname, setPathname] = useState(window.location.pathname.substring(1) || 'home');
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };

  useEffect(() => {
    const tmp = window.location.pathname.substring(1);
    setPathname(tmp);
  });

  const menu = (
    <>
      <Menu.Item key="home">
        <NavLink to="/home">Trang chủ</NavLink>
      </Menu.Item>
      <Menu.Item key="news">
        <NavLink to="/news">Tin tức</NavLink>
      </Menu.Item>
      <SubMenu
        key="community"
        title={
          <>
            Cộng đồng
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </>
        }>
        <Menu.Item key="request">
          <NavLink to="/request">Yêu cầu hỗ trợ</NavLink>
        </Menu.Item>
        <Menu.Item key="map">
          <NavLink to="/map">Bản đồ hỗ trợ</NavLink>
        </Menu.Item>
        <Menu.Item key="store">
          <NavLink to="/store">Đăng ký cửa hàng</NavLink>
        </Menu.Item>
        <Menu.Item key="volunteer">
          <NavLink to="/volunteer">Đăng ký tình nguyện viên</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="health"
        title={
          <>
            Sức khỏe
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </>
        }>
        <Menu.Item key="appointment-register">
          <NavLink to="/appointment/register">Đặt lịch khám</NavLink>
        </Menu.Item>
        <Menu.Item key="doctor">
          <NavLink to="/doctors">Bác sỹ</NavLink>
        </Menu.Item>
        <Menu.Item key="register">
          <NavLink to="/register">Đăng ký tiêm chủng</NavLink>
        </Menu.Item>
        <Menu.Item key="health-declaration">
          <NavLink to="/health-declaration">Khai báo y tế</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu
        key="search"
        title={
          <>
            Tra cứu
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 icon"
              viewBox="0 0 20 20"
              fill="currentColor">
              <path
                fillRule="evenodd"
                d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </>
        }>
        <Menu.Item key="search">
          <NavLink to="/search">Chứng nhận tiêm</NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink to="/result">Kết quả đăng ký tiêm</NavLink>
        </Menu.Item>
        <Menu.Item key="appointment">
          <NavLink to="/appointment">Lịch khám</NavLink>
        </Menu.Item>
        <Menu.Item key="complaint">
          <NavLink to="/complaint">Phản ánh</NavLink>
        </Menu.Item>
      </SubMenu>
    </>
  );
  return (
    <div className="container">
      <div className={styles.header}>
        <div className={styles.logo}>
          <NavLink to="/home">
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
              {menu}
            </Menu>
          </Drawer>
        </div>
        <div className="mobileHidden">
          <Menu
            onClick={e => setPathname(e.key)}
            selectedKeys={pathname}
            theme="light"
            mode="horizontal"
            expandIcon={<DownOutlined />}
            disabledOverflow="true">
            {menu}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
