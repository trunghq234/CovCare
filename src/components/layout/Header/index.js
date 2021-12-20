import { MenuOutlined } from '@ant-design/icons';
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
      <SubMenu key="community" title="Cộng đồng">
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
          <NavLink to="/volunteer">Đăng ký TNV</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="health" title="Sức khỏe">
        <Menu.Item key="appointment">
          <NavLink to="/appointment">Đặt lịch khám</NavLink>
        </Menu.Item>
        <Menu.Item key="register">
          <NavLink to="/register">Đăng ký tiêm chủng</NavLink>
        </Menu.Item>
        <Menu.Item key="health-declaration">
          <NavLink to="/health-declaration">Khai báo y tế</NavLink>
        </Menu.Item>
      </SubMenu>
      <SubMenu key="search" title="Tra cứu">
        <Menu.Item key="search">
          <NavLink to="/search">Chứng nhận tiêm</NavLink>
        </Menu.Item>
        <Menu.Item key="result">
          <NavLink to="/result">Kết quả</NavLink>
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
            disabledOverflow="true">
            {menu}
          </Menu>
        </div>
      </div>
    </div>
  );
};

export default AppHeader;
