import React from 'react';

import Songs from '../components/songs/Songs';
import Search from '../components/songs/Search';

const Home = () => {
  return (
  	<React.Fragment>
  		<Search />
  		<Songs />
  	</React.Fragment>
  );
}

export default Home;