import React, { Component } from 'react';

const Gauche = () => (
    <div id='guache_ctn'>
        <div id='initial_guache' className='ui segment guache_segment'>
            <img id='guache_img_one' className="ui centered large bordered image" src={require("../images/guache_one.png")} />
            <p className='guache_text'>Six White Orbs, 1975</p>
        </div>

        <div id="guache_ctn_two" className='ui segment guache_segment'>
            <img id='guache_img_two' className="ui centered large bordered image guache_img" src={require("../images/guache_two.png")} />
            <p className='guache_text'>Untitled, 1953</p>                    
        </div>
        <div id="guache_ctn_three" className='ui segment guache_segment'>
            <img id='guache_img_three' className="ui centered large bordered image guache_img" src={require("../images/guache_three.png")} />
            <p className='guache_text'>Pyramids, 1971</p>                    
        </div>
        <div id="guache_ctn_four" className='ui segment guache_segment'>
            <img id='guache_img_four' className="ui centered large bordered image guache_img" src={require("../images/guache_four.png")} />
            <p className='guache_text'>UBU, 1971</p>                    
        </div>
        <div id="guache_ctn_five" className='ui segment guache_segment'>
            <img id='guache_img_five' className="ui centered large bordered image guache_img" src={require("../images/Calder.png")} />
            <p className='guache_text'>Spotted Orb and Pyramids, 1956</p>                    
        </div>
    </div>
);
                                         
export default Gauche;
