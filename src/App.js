import React from 'react';
import './App.less';
import { Layout } from 'antd';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHome from 'pages/Home';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import Register from 'pages/Register';

const { Header, Footer, Content } = Layout;

const routes = [
  {
    path: '/',
    page: <AppHome />,
  },
  {
    path: '/register',
    page: <Register />,
  },
];
function App() {
  return (
    <Router>
      <Layout className="mainLayout">
        <Header>
          <AppHeader />
        </Header>
        <Content>
          <Switch>
            {routes.map(route => (
              <Route exact path={route.path}>
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
