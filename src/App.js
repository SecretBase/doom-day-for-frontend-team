import React, { Component } from 'react';
import './App.css';

import Countdown from 'react-count-down'

class App extends Component {
  render() {
	  let OPTIONS = { endDate: '09/01/2016 10:00 AM'};
    return (
      <div className="App">
			<div className="logo--small"></div>
        <Countdown options={OPTIONS} />
		  <p className="prefix">until new secure.aftership.com is launched.</p>
      </div>
    );
  }
}

export default App;
