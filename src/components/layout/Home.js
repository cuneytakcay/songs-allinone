import React from 'react';

import Artists from '../artists/Artists';
import Search from './Search';

const Home = () => {
  return (
  	<React.Fragment>
  		<Search />
  		<Artists />
  	</React.Fragment>
  );
};

export default Home;