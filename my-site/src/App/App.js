import React, {Component} from 'react';
import Particle from '../Particle/particle';
import {ReactComponent as Name} from '../assets/name.svg';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.points =[];
    this.points.push({
      x: 100,
      y: 100,
      oldx:95,
      oldy:95
    })
    this.state = { points: this.points };

  }

  componentDidMount() {
    console.log(this.state.points);
    requestAnimationFrame(this.updatePoints);
  }

  updatePoints = () => {
    for(var i =0;i<this.points.length; i++) {
      var p = this.points[i],
        vx =p.x - p.oldx,
        vy = p.y - p.oldy;
    }
    p.oldx = p.x;
    p.oldy = p.y;
    p.x+=vx;
    p.y+=vy;
    let points = {
      x: p.x,
      y: p.y,
      oldx: p.oldx,
      oldy: p.oldy
    }
    console.log("TEST");
    this.setState({ points });
    requestAnimationFrame(this.updatePoints);
  }

  render() {
    return (
      <React.Fragment>
      <Particle points = {this.state.points}/>
        {/* <div className="name">
          <Name/>
        </div> */}
      </React.Fragment>
    );
  }
}
export default App;
