import React, { Component } from 'react';


class Gauche extends Component {
    
    
    render () {
        
        return(
            <div>
             
            <div>
                
                <div id='gauche_header' className='ui centered huge header'>Set a <span>gouache</span>-darn record.</div>
                <div>
                <div id='gauche_subheader_one' className='ui centered inverted segment'><div id='gauche_subheader_one_content' >Calder Associates Inc. have consigned the top 2 most-valuable Calder gouache works ever sold at auction -- $220,000 and $195,000.</div></div>
             <div id='circle' className="ui circular segment">
                  <h2 className="ui header">
                    Yep,
                    <div className="sub header"> <span>$220,000</span> happened.</div>
                  </h2>
                </div>
                </div>
               


            
            </div>
            
                 <div id='guache_ctn'>
                    <a><div id='initial_guache' className='ui segment guache_segment'>
                        <img id='guache_img_one' className="ui centered large bordered image" src={require("../images/guache_one.png")} />
                        <p className='guache_text'>Six White Orbs, 1975</p>
                    </div></a>

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
            </div>
        
        );
    }
}

                                         
export default Gauche;
