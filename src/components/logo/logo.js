import React from 'react';
import Tilt from 'react-tilt';
import './logo.css';
import brain from './logo.png'


const Logo = () =>{
    return(
        <div className="ma2 mt0">
            <Tilt className="Tilt br2 shadow-2 " options={{ max : 55 }} style={{ height: 130, width: 130 }} >
                <div className="Tilt-inner">
                    <img alt='logo' style={{padding:'15px', width:100 ,height:100}} src={brain} />
                </div>
            </Tilt>
        </div>
    );
}

export default Logo;