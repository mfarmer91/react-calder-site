import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { StickyContainer, Sticky } from 'react-sticky';

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
            <div className='banner_two_text'>Calder works move.</div>
            <div className='banner_two_text'>So does his market.</div>
        </div>
        
        <div id='banner_three'className='container'>
                <div>
                    <a id='evaluate_button' className="ui secondary button" href='/contact'>
                        Evaluate
                    </a>
                </div>
                <img src={require("./images/bushy-tail.png")} />  
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

const Contact = () => (
    <div>
        <form className="ui form">
          <div id='first_contact_field' className="field contact_field">
            <label>First Name</label>
            <input type="text" name="first-name" placeholder="First Name" />
          </div>
          <div className="field contact_field">
            <label>Last Name</label>
            <input type="text" name="last-name" placeholder="Last Name" />
          </div>
        <div className="field contact_field">
            <label>Email</label>
            <input type="text" name="first-name" placeholder="Email" />
          </div>
        <div className='field contact_field'>
            <label>Tell us about your Calder masterpiece.</label>
            <textarea></textarea>
        </div>
          <button id='submit_button' className="ui button" type="submit">Submit</button>
        </form>
    </div>
)


class App extends Component {
    
    state = {
        menuActive: false,
    }
    
    onDropdownClick = () => {
        if (this.state.menuActive == false){
            this.setState({ menuActive: true});
            console.log("We true now.");
        } else if (this.state.menuActive == true) {
            this.setState({ menuActive: false });
            console.log("we false now");
        }
    }
    
    render() {
        
        let dropdown;
            if(this.state.menuActive){
                dropdown = <Dropdown />
            } else {
                dropdown = "";
            }
            
        return (
            <div>
                <div id='nav' className="ui inverted menu">
                    <a className='item' onClick={this.onDropdownClick}><i className="sidebar icon"></i></a>
                    {dropdown}
                    <div id='nav_title' className="ui center aligned header item">
                        Calder Associates Inc.
                    </div>
                    
                    <div id='button_display'>
                      <a className="item nav_link" href='/home'>
                        Home
                      </a>
                      <a className="item nav_link" href='/guache'>
                        Guache
                      </a>
                      <a className="item nav_link" href='/mobile'>
                        Mobile
                      </a>
                      <div className="right menu">
                        <div className="item">
                          <div className="ui icon input">
                          </div>
                        </div>
                        <a className="ui item nav_link" href='/contact'>
                          Contact
                        </a>
                    </div>
                  </div>
                </div>

                <div>
                <Route path='/home' component={Home} />
                <Route path='/mobile' component={Mobile} />
                <Route path='/guache' component={Guache} />
                <Route path='/contact' component={Contact} />

                </div>
            <Footer />
            </div>
        );
    }
}

const Dropdown = () => (
    <div id='dropdown' className="ui inverted fluid popup bottom left transition visible ">
        <div  className="ui four column relaxed equal height divided grid">
            <div className="column">
                    <div className="ui link list">
                        <a id='option1' className="item dropdown_option" href='/home'>Home</a>
                        <a id='option2' className="item dropdown_option" href='/guache'>Guache</a>
                        <a id='option3' className="item dropdown_option" href='/mobile'>Mobile</a>
                        <a id='option4' className="item dropdown_option" href='/contact'>Contact</a>
                    </div>
            </div>
        </div>
    </div>
);

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


