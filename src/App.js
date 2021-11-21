import { Layout } from 'antd';
// import AppHome from 'pages/Home';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import AppDoctor from 'pages/Doctor/Doctors';
import DoctorDetail from 'pages/DoctorDetail/DoctorDetail';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
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
            <Route exact path="/">
              {/* <AppHome /> */}
              <AppDoctor />
            </Route>{' '}
            <Route exact path="/doctor-detail">
              <DoctorDetail />
            </Route>
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
