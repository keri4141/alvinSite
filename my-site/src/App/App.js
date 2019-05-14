import React, {Component} from 'react';
import Particle from '../Particle/particle';
import {ReactComponent as Name} from '../assets/name.svg';

import './App.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
      <Particle/>
        {/* <div className="name">
          <Name/>
        </div> */}
      </React.Fragment>
    );
  }
}
export default App;
