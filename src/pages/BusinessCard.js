import React, { useEffect } from 'react';

// style
import './../App.css';
import './../style/loading_dot.css';

import DotLoader from '../component/DotLoader';

// Image
import work from './../assert/construction-lol.gif'

function BusinessCard() {
  useEffect(() => {
    document.title = 'Home page | Ban Chang Pab';
  }, []);

  return (
    <div className="App">
      <div className="App-header">
        <p style={{fontSize: '3rem'}}>Welcome to บ้านช่างภาพ Website</p>

        <img src={work} alt="logo" style={{paddingBottom: '8px', paddingTop: '8px'}}/>

        <DotLoader/>
      </div>
    </div>
  );
}

export default BusinessCard;
