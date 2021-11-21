import About from 'components/Home/About';
import News from 'components/Home/News';
import Prevention from 'components/Home/Prevention';
import React from 'react';
import Home from 'components/Home/Home';
import Symptons from 'components/Home/Symptons';

const AppHome = () => {
  return (
    <div>
      <Home />
      <About />
      <Symptons />
      <Prevention />
      <News />
    </div>
  );
};

export default AppHome;
