import { Layout } from 'antd';
// import AppHome from 'pages/Home';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
// import { AppHome, DoctorPage, DoctorDetailPage } from './pages/index';
import AppHome from 'pages/Home';
import DoctorPage from 'pages/Doctor';
import DoctorDetailPage from 'pages/DoctorDetail';
import './App.less';
import Certificate from 'pages/Searching/Certificate';
import RegistrationResult from 'pages/Searching/RegistrationResult';
import Complaint from 'pages/Searching/Complaint';

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
              <AppHome />
            </Route>
            <Route exact path="/doctors">
              <DoctorPage />
            </Route>
            <Route exact path="/doctor-detail">
              <DoctorDetailPage />
            </Route>
            <Route exact path="/search">
              <Certificate />
            </Route>
            <Route exact path="/lookup-injection-registration">
              <RegistrationResult />
            </Route>
            <Route exact path="/search-complaint">
              <Complaint />
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
