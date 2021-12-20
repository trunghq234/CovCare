import { Layout } from 'antd';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { routes } from 'routes';
import './App.less';

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
          </Switch>
        </Content>
        <Footer>
          <AppFooter />
        </Footer>
      </Layout>
    </Router>
  );
}

export default App;
