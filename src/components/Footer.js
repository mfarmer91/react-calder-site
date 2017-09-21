import React, { Component } from 'react';

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

export default Footer;