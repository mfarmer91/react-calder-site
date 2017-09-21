import React, { Component } from 'react';
import { StickyContainer, Sticky } from 'react-sticky';

import Footer from './Footer'
import Menu from './Menu'
import Home from './Home';
import Gauche from './Gauche';
import Mobile from './Mobile';
import Contact from './Contact';
import About from './About';
import Dropdown from './Dropdown';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
    NavLink
} from 'react-router-dom'

import '../App.css';
import createHistory from 'history/createBrowserHistory';

const history = createHistory();

class App extends Component {
    render() { 
        return (
            <div>
                <Router>
                    <div>
                    <Menu />
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
                </Router>
                <Footer />
            </div>
        );
    }
}

export default App;


