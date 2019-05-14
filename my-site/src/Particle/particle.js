import React , {Component, PureComponent} from 'react';
import ParticleClass from './particleClass';
class Particle extends PureComponent {
    myRef = React.createRef();
    frame = (mouse, ctx) => {
        requestAnimationFrame(() => {this.frame(mouse,ctx)});
        ctx.clearRect(0, 0, this.width, this.height);
        for (var i = 0; i < this.particles.length; i++) {
          this.particles[i].attract(mouse.x, mouse.y);
          this.particles[i].integrate();
          this.particles[i].draw(ctx);
          console.log(this.particles);
        }
      }
      componentDidMount() {
        console.log(this.myRef);
         this.ctx = this.myRef.current.getContext('2d');
         this.particles = [];
         this.width = this.myRef.current.width = window.innerWidth;
         this.height = this.myRef.current.height = window.innerHeight;
         this.mouse = { x: this.width * 0.5, y: this.height * 0.5 };
        for (var i = 0; i < 1; i++) {
          this.particles[i] = new ParticleClass(Math.random() * this.width, Math.random() * this.height);
        }
        this.myRef.current.addEventListener('mousemove', this.onMousemove);
        // requestAnimationFrame(() => {this.frame(this.mouse,this.ctx)});
       
      }
      componentDidUpdate() {
          console.log(this.ctx);
        this.width = this.myRef.current.width = window.innerWidth;
        this.height = this.myRef.current.height = window.innerHeight;
        this.mouse = { x: this.width * 0.5, y: this.height * 0.5 };
        requestAnimationFrame(() => {this.frame(this.mouse,this.ctx)});

      }      
    render() {
       
        return (
            <canvas ref={this.myRef}>
            
            </canvas>
        );
    }

}

export default Particle;