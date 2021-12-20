import Appointment from 'components/Appointment';
import RegisterAppointment from 'components/Appointment/Register';
import DoctorPage from 'pages/Doctor';
import DoctorDetailPage from 'pages/DoctorDetail';
import HealthDeclaration from 'pages/HealthDeclaration';
import AppHome from 'pages/Home';
import News from 'pages/News';
import NotFound from 'pages/NotFound';
import Register from 'pages/Register';
import SalesLocation from 'pages/SalesLocation';
import Certificate from 'pages/Searching/Certificate';
import Complaint from 'pages/Searching/Complaint';
import RegistrationResult from 'pages/Searching/RegistrationResult';
import StorePage from 'pages/Store';
import SupportRequest from 'pages/SupportRequest';
import VolunteerPage from 'pages/Volunteer';
import React from 'react';

const routes = [
  {
    path: '/home',
    page: <AppHome />,
  },
  {
    path: '/news',
    page: <News />,
  },
  {
    path: '/request',
    page: <SupportRequest />,
  },
  {
    path: '/map',
    page: <SalesLocation />,
  },
  {
    path: '/store',
    page: <StorePage />,
  },
  {
    path: '/volunteer',
    page: <VolunteerPage />,
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
    path: '/register',
    page: <Register />,
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
    path: '/result',
    page: <RegistrationResult />,
  },
  {
    path: '/complaint',
    page: <Complaint />,
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
    path: '*',
    page: <NotFound />,
  },
];

export { routes };
