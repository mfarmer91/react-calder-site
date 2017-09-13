import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

const Route = ({ path, component }) => {
    const pathname = window.location.pathname;
    if (pathname.match(path)) {
        return (
            React.createElement(component)
        );
    } else {
        return null;
    }
}

const Home = () => (
    <div>
        <div className='container'>
                <img src={require("./images/guache_one.png")} />  
        </div>
        <div id='banner_two' className='container'>
        </div>
    </div>
);

const Guache = () => (
    <div id='guache_ctn'>
        <div id='initial_guache' className='ui segment guache_segment'>
            <img className="ui centered large bordered image" src={require("./images/guache_one.png")} />
            <p className='guache_text'>Six White Orbs, 1975</p>
        </div>

        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/guache_two.png")} />
            <p className='guache_text'>Untitled, 1953</p>                    
        </div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/guache_three.png")} />
            <p className='guache_text'>Pyramids, 1971</p>                    
        </div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/guache_four.png")} />
            <p className='guache_text'>UBU, 1971</p>                    
        </div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/Calder.png")} />
            <p className='guache_text'>Spotted Orb and Pyramids, 1956</p>                    
        </div>
    </div>
);

const Mobile = () => (
     <div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/mobile_one.png")} />
            <p className='mobile_text'>Made in Birmingham.</p>
        </div>

        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/mobile_two.png")} />
            <p className='mobile_text'>Made in Birmingham.</p>
        </div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/mobile_three.png")} />
            <p className='mobile_text'>Made in Birmingham.</p>
        </div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/mobile_four.png")} />
            <p className='mobile_text'>Made in Birmingham.</p>
        </div>
        <div className='ui segment'>
            <img className="ui centered large bordered image" src={require("./images/mobile_five.png")} />
            <p className='mobile_text'>Made in Birmingham.</p>
        </div>
    </div>
);

class App extends Component {
    render() {
        return (
            <div>
                <div id='nav' className="ui inverted menu">
                  <a className="item" href='/home'>
                    Home
                  </a>
                  <a className="item" href='/guache'>
                    Guache
                  </a>
                  <a className="item" href='/mobile'>
                    Mobile
                  </a>
                  <div className="right menu">
                    <div className="item">
                      <div className="ui icon input">
                        <input type="text" placeholder="Search..." />
                        <i className="search link icon"></i>
                      </div>
                    </div>
                    <a className="ui item">
                      Log In
                    </a>
                  </div>
                </div>
                <div>
                <Route path='/home' component={Home} />
                <Route path='/mobile' component={Mobile} />
                <Route path='/guache' component={Guache} />
                </div>
            <Footer />
            </div>
        );
    }
}

class Footer extends Component {
    
    onGitClick() {
        window.location.href="http://www.github.com/mfarmer91";
    }
    
    render() {
        return (
            <div className='footer'>
                 <div id='footer_ctn'>
                    <button className="ui center aligned basic button" onClick={this.onGitClick}>
                        <p className='footer_text'><i className="spy icon"></i>2017 Michael Farmer</p>
                        <p className='footer_text'>Made in London.</p>
                    </button>  
                </div>
            </div>
        );
    }
}


export default App;
