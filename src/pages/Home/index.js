import FAQ from 'components/Home/FAQ';
import About from 'components/Home/About';
import News from 'components/Home/News';
import Prevention from 'components/Home/Prevention';
import Treatment from 'components/Home/Treatment';
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
      <Treatment />
      <FAQ />
      <News />
    </div>
  );
};

export default AppHome;
