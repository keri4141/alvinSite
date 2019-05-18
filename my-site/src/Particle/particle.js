import React , {Component, PureComponent} from 'react';
import ParticleClass from './particleClass';
class Particle extends Component {
  constructor(props) {
    super(props);
    this.points =[];
    // this.points.push({
    //   x: 100,
    //   y: 100,
    //   oldx:95,
    //   oldy:95
    // })
    this.state = { points: this.points };
  }

    myRef = React.createRef();
    // renderPoints = (p) => {
    //   this.ctx.clearRect(0,0, this.width, this.height);
    //   this.ctx.beginPath();
    //   this.ctx.arc(p.x, p.y, 5, 0, Math.PI *2);
    //   this.ctx.fill();
    // }
        /*
      Will allow state to change hence triggering a re render on the component and on the canvas with new values
    */
      updatePoints = () => {
        this.ctx.clearRect(0, 0, this.width, this.height);
        for(let i =0;i<this.points.length;i++) {
          this.points[i].attract(this.mouse.x,this.mouse.y);
          this.points[i].integrate();
         
          this.points[i].draw(this.ctx);
         
        }
        const points = Object.assign( {}, this.points);
        // for(var i =0;i<this.points.length; i++) {
        //   var p = this.points[i],
        //     vx =p.x - p.oldx,
        //     vy = p.y - p.oldy;
        // }
        // p.oldx = p.x;
        // p.oldy = p.y;
        // p.x+=vx;
        // p.y+=vy;
        // let points = {
        //   x: p.x,
        //   y: p.y,
        //   oldx: p.oldx,
        //   oldy: p.oldy
        // }
        this.setState({ points });
        requestAnimationFrame(this.updatePoints);
        
      }
      componentDidMount() {
        console.log(this.myRef);
        this.width = this.myRef.current.width = window.innerWidth;
        this.height = this.myRef.current.height = window.innerHeight;
        this.mouse = { x: this.width * 0.5, y: this.height * 0.5 };
        this.ctx = this.myRef.current.getContext('2d');
        for (let i = 0; i < 150; i++) {
          this.points[i] = new ParticleClass(Math.random() * this.width, Math.random() * this.height);

        }
       
       
        
         requestAnimationFrame(this.updatePoints);
         
      }     
      onMousemove=(e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      }
      componentDidUpdate() {
        // this.ctx.clearRect(0, 0, this.width, this.height);
        const {points} = this.state;
        // console.log(points);
        // this.renderPoints(points);
      }
    render() {
       
        return (
            <canvas onMouseMove={this.onMousemove} ref={this.myRef}>
            
            </canvas>
        );
    }

}

export default Particle;