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
                <Navigation />
                <BannerOne />
            </div>
        );
    }
}

class Navigation extends Component {
    render() {
        return (
            <div id='nav' className="ui inverted menu">
              <a className="item">
                Life
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
                <div className='container'>
                    <img src={require("./images/guache_one.png")} />
                </div>
            </div>

        );
    }
}

class Overlay extends Component {
    render() {
        return (
            <div>
                <h1>Calder</h1>
            </div>
        );
    }
}

export default App;
