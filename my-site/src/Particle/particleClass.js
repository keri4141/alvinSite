export default class ParticleClass {
    
    constructor(x,y) {
        this.x = this.oldX = x;
        this.y = this.oldY = y;
        this.DAMPING = 0.99;
    }
    integrate = () => {
        let velocityX = (this.x - this.oldX) * this.DAMPING;
        let velocityY = (this.y - this.oldY) * this.DAMPING;
        this.oldX = this.x;
        this.oldY = this.y;
        this.x += velocityX;
        this.y += velocityY;
     
      };
      attract = (x, y)  => {
        
        let dx = x - this.x;
        let dy = y - this.y;
       
     
        let distance = Math.sqrt(dx * dx + dy * dy);
      
        this.x += dx / distance;
        this.y += dy / distance;
       
      };
      draw = (ctx) => {
        
        ctx.strokeStyle = '#444554';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(this.oldX, this.oldY);
        ctx.lineTo(this.x, this.y);
        ctx.stroke();
        
      };
      
}