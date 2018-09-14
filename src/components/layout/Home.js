import React from 'react';

import Tracks from '../tracks/Tracks';
import Search from './Search';

const Home = () => {
  return (
  	<React.Fragment>
  		<Search />
  		<Tracks />
  	</React.Fragment>
  );
};

export default Home;