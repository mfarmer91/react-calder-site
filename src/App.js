import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
        <div>
            <Header />
            <Footer />
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

class Footer extends Component {
    
    onGitClick() {
        window.location.href="http://www.github.com/mfarmer91";
    }
    
    render() {
        return (
            <div className='footer'>
                 <div id='footer_ctn'>
                    <button className="ui basic button" onClick={this.onGitClick}>
                        <p className='footer_text'><i className="spy icon"></i>2017 Michael Farmer</p>
                        <p className='footer_text'>Made in London.</p>
                    </button>  
                </div>
            </div>
        );
    }
}


export default App;
