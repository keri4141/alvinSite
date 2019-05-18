import React , {Component, PureComponent} from 'react';
import ParticleClass from './particleClass';
import './particle.css';
class Particle extends Component {
  constructor(props) {
    super(props);
    this.points =[];
    this.state = { points: this.points };
  }

    myRef = React.createRef();
    
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
       
        this.setState({ points });
        requestAnimationFrame(this.updatePoints);
        
      }
      componentDidMount() {
        console.log(this.myRef);
        this.width = this.myRef.current.width = window.innerWidth;
        this.height = this.myRef.current.height = window.innerHeight;
        this.mouse = { x: this.width * 0.5, y: this.height * 0.5 };
        this.ctx = this.myRef.current.getContext('2d');
        for (let i = 0; i < 250; i++) {
          this.points[i] = new ParticleClass(Math.random() * this.width, Math.random() * this.height);

        }
         requestAnimationFrame(this.updatePoints);
         
      }     
      onMousemove=(e) => {
        this.mouse.x = e.clientX;
        this.mouse.y = e.clientY;
      }
    render() {
       
        return (
            <canvas className="canvas" onMouseMove={this.onMousemove} ref={this.myRef}>
            
            </canvas>
        );
    }

}

export default Particle;