import React from 'react';
import { Jumbotron } from 'reactstrap';


const Home = (props) => {
  return (
    <div className='heading'>
      <Jumbotron>
        <h1>My Haus</h1>
        <h3>Your best source for expat real estate in Germany.</h3>
      </Jumbotron>
    </div>
  );
};

export default Home;
