import { Button, Layout } from 'antd';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import React from 'react';
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import './App.less';
import { SoundOutlined } from '@ant-design/icons';

const { Header, Footer, Content } = Layout;

function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content className="app__content">
          <Switch>
            {routes.map(route => (
              <Route key={route.path} exact path={route.path}>
                {route.page}
              </Route>
            ))}
            <Route>
              <Redirect to="/home" />
            </Route>
          </Switch>
          <Button
            href="/feedback"
            icon={<SoundOutlined />}
            style={{ position: 'fixed', bottom: '10px', right: '10px' }}
            type="primary">
            Phản ánh
          </Button>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
