import React, { Component } from 'react';

import Home from './Home';
import Gauche from './Gauche';
import Mobile from './Mobile';
import Contact from './Contact';
import About from './About';
import Dropdown from './Dropdown';

import {
    Link,
    NavLink,
} from 'react-router-dom'

import '../App.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class Menu extends Component {

    state = {
        menuActive: false,
    }
    
    onDropdownClick = () => {
        if (this.state.menuActive == false){
            this.setState({ menuActive: true});
        } else if (this.state.menuActive == true) {
            this.setState({ menuActive: false });
        }
    }
    
    removeDropdown = () => {
        if (this.state.menuActive == true){
            this.setState({ menuActive: false });
        }
    }
    
    render() {
        
        let dropdown;
            if(this.state.menuActive){
                dropdown = <Dropdown />;
            } else {
                dropdown = "";
            }
                
        return (
            <div onClick={this.removeDropdown}>
                <div id='nav' className="ui top fixed inverted menu">
                    <a id='stack_nav_a' className='item' onClick={this.onDropdownClick}><i id='stack_nav' className="sidebar icon"></i></a>
                    {dropdown}
                    <div id='nav_title' className="ui center aligned header item">
                        <Link to='/home'>
                        <a id='nav_title_a'>
                        Calder Associates Inc.
                        </a>
                        </Link>
                    </div>
                    
                    <div id='button_display'>
                        <NavLink to='/home'
                            className='item nav_link'>
                                Home
                        </NavLink>
                        <NavLink to='/gauche'
                            className="item nav_link">
                                Gouache
                        </NavLink>
                        <NavLink to='/mobile'
                            className="item nav_link">
                                Mobile
                        </NavLink>
                        <NavLink to='/contact'
                            className="item nav_link">
                                Contact
                        </NavLink>
                    </div>
                </div>
            </div>
        );
    }
}

export default Menu;