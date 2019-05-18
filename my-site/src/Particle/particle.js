import React , {Component, PureComponent} from 'react';
import ParticleClass from './particleClass';
class Particle extends Component {
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

    myRef = React.createRef();
    renderPoints = (p) => {
      this.ctx.clearRect(0,0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 5, 0, Math.PI *2);
      this.ctx.fill();
    }
        /*
      Will allow state to change hence triggering a re render on the component and on the canvas with new values
    */
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
      componentDidMount() {
        console.log(this.myRef);
        
         this.ctx = this.myRef.current.getContext('2d');
         this.width = this.myRef.current.width = window.innerWidth;
         this.height = this.myRef.current.height = window.innerHeight;
         requestAnimationFrame(this.updatePoints);
         
      }     
      componentDidUpdate() {
        const {points} = this.state;
        this.renderPoints(points);
      }
    render() {
       
        return (
            <canvas ref={this.myRef}>
            
            </canvas>
        );
    }

}

export default Particle;