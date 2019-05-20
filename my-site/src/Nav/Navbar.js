import React, {Component} from 'react';
import './Navbar.css';

class Navbar extends Component {
  menuClick = () => {
    
  }
  render() {
    return (
        <div  className="menu-section">
        <div className="menu-toggle">
          <div className="one"></div>
          <div class="two"></div>
          <div className="three"></div>
        </div>
        <nav>
              <ul role="navigation" className="hidden">
                  <li><a href="#">Item-1</a></li>
                  <li><a href="#">Item-2</a></li>
                  <li><a href="#">Item-3</a></li>
                  <li><a href="#">Item-4</a></li>
              </ul>
          </nav>
      </div>
      
    );
  }
}
export default Navbar;
