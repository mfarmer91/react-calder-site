import React, { Component } from 'react';

import Home from './Home';
import Gauche from './Gauche';
import Mobile from './Mobile';
import Contact from './Contact';
import About from './About';
import Dropdown from './Dropdown';
import Footer from './Footer'



import '../App.css';
import createHistory from 'history/createBrowserHistory';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'

const history = createHistory();

class App extends Component {
    
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
    
    render() {
        
        let dropdown;
            if(this.state.menuActive){
                dropdown = <Dropdown />;
            } else {
                dropdown = "";
            }
                
        return (
            <Router>
            <div>
                <div id='nav' className="ui inverted menu">
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
                        <Link to='/home'>
                          <a className="item nav_link">
                            Home
                          </a>
                        </Link>
                        <Link to='/gauche'>
                          <a className="item nav_link">
                            Gauche
                          </a>
                        </Link>
                        <Link to='/mobile'>
                          <a className="item nav_link">
                            Mobile
                          </a>
                        </Link>
                        <Link to='/contact'>
                            <a className="ui item nav_link">
                              Contact
                            </a>
                        </Link>
                    </div>
                </div>
                <div>
                <Switch>
                <Route path='/home' component={Home} />
                <Route path='/mobile' component={Mobile} />
                <Route path='/gauche' component={Gauche} />
                <Route path='/contact' component={Contact} />
                <Route path='/about' component={About} />
                <Route exact={true} path ='/' component={Home} />
                <Route render={({location}) => (
                    <div className='ui segment'><h3>Gauche, you have gone overly mobile in your path use.  The <code>{location.pathname}</code> path does not exist.</h3></div>
                )} />
                </Switch>

                </div>
            <Footer />
            </div>
            </Router>
        );
    }
}


export default App;


