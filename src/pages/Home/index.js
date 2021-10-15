import About from 'components/Home/About';
import News from 'components/Home/News';
import Prevention from 'components/Home/Prevention';
import React from 'react';

const AppHome = () => {
  return (
    <div>
      <Prevention />
      <About />
      <News />
    </div>
  );
};

export default AppHome;
