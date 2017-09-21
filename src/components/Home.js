import React, { Component } from 'react';

import { Link } from 'react-router-dom';


const Home = () => (
    <div>
        <div className='container'>
            <img className='img' src={require("../images/guache_one.png")} />
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
                <img id='bushy_img' src={require("../images/bushy-tail.png")} />  
        </div>
    </div>
);
                                         
export default Home;
