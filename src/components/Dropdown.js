import React, { Component } from 'react';


const Dropdown = () => (
    <div id='dropdown' className="ui inverted fluid popup bottom left transition visible ">
        <div  className="ui four column relaxed equal height divided grid">
            <div className="column">
                    <div className="ui link list">
                        <a id='option1' className="item dropdown_option" href='/home'>Home</a>
                        <a id='option2' className="item dropdown_option" href='/gauche'>Gouache</a>
                        <a id='option3' className="item dropdown_option" href='/mobile'>Mobile</a>
                        <a id='option4' className="item dropdown_option" href='/contact'>Contact</a>
                    </div>
            </div>
        </div>
    </div>
);

export default Dropdown;