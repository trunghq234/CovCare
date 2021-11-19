import FAQ from 'components/Home/FAQ';
import About from 'components/Home/About';
import News from 'components/Home/News';
import Prevention from 'components/Home/Prevention';
import Treatment from 'components/Home/Treatment';
import React from 'react';

const AppHome = () => {
  return (
    <div>
      <Prevention />
      <Treatment />
      <FAQ />
      <About />
      <News />
    </div>
  );
};

export default AppHome;
