import { Layout } from 'antd';
import AppFooter from 'components/layout/Footer';
import AppHeader from 'components/layout/Header';
import HealthDeclaration from 'pages/HealthDeclaration';
import Register from 'pages/Register';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import AppHome from 'pages/Home';
import DoctorPage from 'pages/Doctor';
import DoctorDetailPage from 'pages/DoctorDetail';
import './App.less';
import VolunteerPage from 'pages/Volunteer';
import StorePage from 'pages/Store';
import Certificate from 'pages/Searching/Certificate';
import RegistrationResult from 'pages/Searching/RegistrationResult';
import Complaint from 'pages/Searching/Complaint';
import Appointment from 'components/Appointment';
import RegisterAppointment from 'components/Appointment/Register';
import SupportRequest from 'pages/SupportRequest';

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
  {
    path: '/doctors',
    page: <DoctorPage />,
  },
  {
    path: '/doctor-detail',
    page: <DoctorDetailPage />,
  },
  {
    path: '/volunteer',
    page: <VolunteerPage />,
  },
  {
    path: '/store',
    page: <StorePage />,
  },
  {
    path: '/health-declaration',
    page: <HealthDeclaration />,
  },
  {
    path: '/search',
    page: <Certificate />,
  },
  {
    path: '/lookup-injection-registration',
    page: <RegistrationResult />,
  },
  {
    path: '/search-complaint',
    page: <Complaint />,
  },
  {
    path: '/appointment',
    page: <Appointment />,
  },
  {
    path: '/appointment/register',
    page: <RegisterAppointment />,
  },
  {
    path: '/support-request',
    page: <SupportRequest />,
  },
];
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
