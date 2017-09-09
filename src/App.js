import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
        </div>
    );
  }
}

class Header extends Component {
    render() {
        return (
            <div>
                <div>
                    <Navigation />
                    <BannerOne />
                </div>
                <div>
                    <BannerTwo />
                </div>
            </div>

        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div id='nav' className="ui inverted menu">
              <a className="item">
                Home
              </a>
              <a className="item">
                Guache
              </a>
              <a className="item">
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
        );
    }
}

class BannerOne extends Component {
    render() {
        return (
            <div>
                <div>
                    <div className='container'>
                        <img src={require("./images/guache_one.png")} />                    </div>
                    </div>
            </div>
        
        );
    }
}

class BannerTwo extends Component {
    render() {
        return (
            <div id='banner_two' className='container'>
            </div>
        );
    }
}


export default App;
