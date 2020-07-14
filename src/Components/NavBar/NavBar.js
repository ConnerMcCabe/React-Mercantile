import React, { Component } from 'react';
import './NavBar.css';

class NavBar extends Component {
    render() {
        return (
            <div className="NavBar">
                <header>
                    <nav>
                        <ul>
                            <li><a href="https://github.com/ConnerMcCabe">thing1</a></li>
                            <li><a href="https://github.com/ConnerMcCabe">thing2</a></li>
                            <li><a href="https://github.com/ConnerMcCabe">thing3</a></li>
                        </ul>
                    </nav>
                    <a href="cta"><button>Cart</button></a>
                </header>
            </div>
        );
    }
}

export default NavBar;