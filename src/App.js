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
    <div id='banner_two' className='container'>
    </div>
);

const Mobile = () => (
    <div id='banner_two' className='container'>
    </div>
);

class App extends Component {
    render() {
        return (
            <div>
                <div id='nav' className="ui inverted menu">
                  <a className="item" href='/home'>
                    App
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
            </div>
        );
    }
}

//class Footer extends Component {
//    
//    onGitClick() {
//        window.location.href="http://www.github.com/mfarmer91";
//    }
//    
//    render() {
//        return (
//            <div className='footer'>
//                 <div id='footer_ctn'>
//                    <button className="ui center aligned basic button" onClick={this.onGitClick}>
//                        <p className='footer_text'><i className="spy icon"></i>2017 Michael Farmer</p>
//                        <p className='footer_text'>Made in London.</p>
//                    </button>  
//                </div>
//            </div>
//        );
//    }
//}


export default App;
