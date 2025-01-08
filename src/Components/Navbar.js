import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';
import logo from './akshika_logo.png';

function Navbar() {
    return (
        <div>
            <nav>
                <img src={logo} alt="Akshika logo" style={{ width: '150px', height: 'auto' }} />
                <div id="navbar">
                    <ul>
                        <li><Link to="/">h o m e</Link></li>
                        <li><Link to="/projects">p r o j e c t s</Link></li>
                        <li><Link to="/contact">c o n t a c t</Link></li>
                    </ul>
                </div>
            </nav>
        </div>
    );
}

export default Navbar;
