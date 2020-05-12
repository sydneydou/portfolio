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
                    <li className="nav-item">About</li>
                    <li className="nav-item">Work</li> 
                    <li className="nav-item">Contact Me</li>
                </ul>
            </div>
        );
    }
}
 
export default Header ;