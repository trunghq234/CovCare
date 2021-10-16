import FAQ from 'components/Home/FAQ';
import Prevention from 'components/Home/Prevention';
import Treatment from 'components/Home/Treatment';
import React from 'react';

const AppHome = () => {
  return (
    <div>
      <Prevention />
      <Treatment />
      <FAQ />
    </div>
  );
};

export default AppHome;
