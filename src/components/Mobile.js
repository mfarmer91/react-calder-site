import React, { Component } from 'react';

const Mobile = () => (
     <div>
        <div id='mobile_ctn_one' className='ui segment'>
            <img id='mobile_img_one' className="ui centered large bordered image" src={require("../images/mobile_one.png")} />
            <p className='mobile_text'>Constellation with Red Object, 1943.</p>
        </div>

        <div id='mobile_ctn_two' className='ui segment'>
            <img id='mobile_img_two' className="ui centered large bordered image" src={require("../images/mobile_two.png")} />
            <p className='mobile_text'>Lobster Trap and Fish Tail.</p>
        </div>
        <div id='mobile_ctn_three' className='ui segment'>
            <img id='mobile_img_three' className="ui centered large bordered image" src={require("../images/mobile_three.png")} />
            <p className='mobile_text'>Little Face, 1962.</p>
        </div>
        <div id='mobile_ctn_four' className='ui segment'>
            <img id='mobile_img_four' className="ui centered large bordered image" src={require("../images/mobile_four.png")} />
            <p className='mobile_text'>Untitled, 1949.</p>
        </div>
        <div id='mobile_ctn_five' className='ui segment'>
            <img id='mobile_img_five' className="ui centered large bordered image" src={require("../images/mobile_five.png")} />
            <p className='mobile_text'>L'empennage, 1953.</p>
        </div>
    </div>
);

export default Mobile;