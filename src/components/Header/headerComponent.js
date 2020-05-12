import React, { Component } from 'react';
import '../Header/styles.css'

class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
        return (  
            <div className="nav-container">
                <ul className = "list">
                    <li className="nav-item"><a className="nav-link" href="#about">About</a></li>
                    <li className="nav-item"><a className="nav-link" href="#work">Work</a></li> 
                    <li className="nav-item"><a className="nav-link" href="#contact">Contact Me</a></li>
                </ul>
            </div>
        );
    }
}
 
export default Header ;