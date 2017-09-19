import React, { Component } from 'react';
import './App.css';
import createHistory from 'history/createBrowserHistory';

import {
    BrowserRouter as Router,
    Route,
    Link,
    Switch,
} from 'react-router-dom'

const history = createHistory();


const Home = () => (
    <div>
        <div className='container'>
            <img className='img' src={require("./images/guache_one.png")} />
            <div id='tag_label' className="ui labels">
                <Link to='/contact'>
                <a id='tag_label_a' className="ui inverted label">
                   Sold for $90,000 in 2017.
                </a>
                </Link>
            </div>
        </div>
        <div id='banner_two' className='container'>
            <div className='banner_two_text'>Calder works move.</div>
            <div className='banner_two_text'>So does his market.</div>
        </div>
        
        <div id='banner_three' className='container'>
                <div>
                    <Link to='/contact'>
                    <a id='evaluate_button' className="ui secondary button">
                        Evaluate
                    </a>
                    </Link>
                </div>
                <img id='bushy_img' src={require("./images/bushy-tail.png")} />  
        </div>
    </div>
);

const Guache = () => (
    <div id='guache_ctn'>
        <div id='initial_guache' className='ui segment guache_segment'>
            <img id='guache_img_one' className="ui centered large bordered image" src={require("./images/guache_one.png")} />
            <p className='guache_text'>Six White Orbs, 1975</p>
        </div>

        <div id="guache_ctn_two" className='ui segment guache_segment'>
            <img id='guache_img_two' className="ui centered large bordered image guache_img" src={require("./images/guache_two.png")} />
            <p className='guache_text'>Untitled, 1953</p>                    
        </div>
        <div id="guache_ctn_three" className='ui segment guache_segment'>
            <img id='guache_img_three' className="ui centered large bordered image guache_img" src={require("./images/guache_three.png")} />
            <p className='guache_text'>Pyramids, 1971</p>                    
        </div>
        <div id="guache_ctn_four" className='ui segment guache_segment'>
            <img id='guache_img_four' className="ui centered large bordered image guache_img" src={require("./images/guache_four.png")} />
            <p className='guache_text'>UBU, 1971</p>                    
        </div>
        <div id="guache_ctn_five" className='ui segment guache_segment'>
            <img id='guache_img_five' className="ui centered large bordered image guache_img" src={require("./images/Calder.png")} />
            <p className='guache_text'>Spotted Orb and Pyramids, 1956</p>                    
        </div>
    </div>
);

const Mobile = () => (
     <div>
        <div id='mobile_ctn_one' className='ui segment'>
            <img id='mobile_img_one' className="ui centered large bordered image" src={require("./images/mobile_one.png")} />
            <p className='mobile_text'>Constellation with Red Object, 1943.</p>
        </div>

        <div id='mobile_ctn_two' className='ui segment'>
            <img id='mobile_img_two' className="ui centered large bordered image" src={require("./images/mobile_two.png")} />
            <p className='mobile_text'>Lobster Trap and Fish Tail.</p>
        </div>
        <div id='mobile_ctn_three' className='ui segment'>
            <img id='mobile_img_three' className="ui centered large bordered image" src={require("./images/mobile_three.png")} />
            <p className='mobile_text'>Little Face, 1962.</p>
        </div>
        <div id='mobile_ctn_four' className='ui segment'>
            <img id='mobile_img_four' className="ui centered large bordered image" src={require("./images/mobile_four.png")} />
            <p className='mobile_text'>Untitled, 1949.</p>
        </div>
        <div id='mobile_ctn_five' className='ui segment'>
            <img id='mobile_img_five' className="ui centered large bordered image" src={require("./images/mobile_five.png")} />
            <p className='mobile_text'>L'empennage, 1953.</p>
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

const About = () => (
    <div>
        <div id='about_text' className="ui piled segment">
  <h4 id='about_header' className="ui medium header">We know Calder.</h4>
  <p>Love for Alexander Calder began at kinetic.  Calder Associates Inc. founder Michael Farmer experienced his first mobile — movable drawing in space — at the Virginia Museum of Fine Arts in Richmond, Virginia at 10 years old.  Fast-forward 15 years, and Michael has dedicated both academic study and 6 years art world employment to gaining an unparalleled expertise in Calder’s works.</p>
   <p>Calder Associates Inc. offers certified authentication, in-depth price evaluation and international private sale of all Alexander Calder works.  In addition, a global network of renowned art-world connections — including museums, conservationists, collectors and auction houses — are at the disposal of any Calder Associates Inc. client.  Calder works move, and so does Calder’s market.  We know both.</p>
   <p>Eu quo homero blandit intellegebat. Incorrupte consequuntur mei id. Mei ut facer dolores adolescens, no illum aperiri quo, usu odio brute at. Qui te porro electram, ea dico facete utroque quo.</p>
        </div>
    </div>
        
)



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
    
    componentDidMount() {
        history.listen(() =>
            this.forceUpdate());
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
                <Route path='/gauche' component={Guache} />
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

const Dropdown = () => (
    <div id='dropdown' className="ui inverted fluid popup bottom left transition visible ">
        <div  className="ui four column relaxed equal height divided grid">
            <div className="column">
                    <div className="ui link list">
                        <a id='option1' className="item dropdown_option" href='/home'>Home</a>
                        <a id='option2' className="item dropdown_option" href='/gauche'>Gauche</a>
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
                    
                    <button id='london_button' className="ui center aligned basic inverted button" onClick={this.onGitClick}>
                        <p id='name_footer_text' className='footer_text'><i className="spy icon"></i>2017 Michael Farmer</p>
                        <p id='london_footer_text' className='footer_text'>It's from London.</p>
                    </button>   
                    <div className='footer_links'>
                        <ul className='footer_list'>
                            <li><a href='/contact'>contact us</a></li>
                            <li><a>press</a></li>
                            <li><a href='/about'>about</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        );
    }
}


export default App;


