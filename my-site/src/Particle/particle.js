import React , {Component, PureComponent} from 'react';
import ParticleClass from './particleClass';
class Particle extends Component {
  constructor(props) {
    super(props);

  }

    myRef = React.createRef();
    renderPoints = (p) => {
      this.ctx.clearRect(0,0, this.width, this.height);
      this.ctx.beginPath();
      this.ctx.arc(p.x, p.y, 5, 0, Math.PI *2);
      this.ctx.fill();
    }
      componentDidMount() {
        console.log(this.myRef);
         this.ctx = this.myRef.current.getContext('2d');
         this.width = this.myRef.current.width = window.innerWidth;
         this.height = this.myRef.current.height = window.innerHeight;
      }     
      componentDidUpdate() {
        const {points} = this.props;
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