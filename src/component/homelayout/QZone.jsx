import React from 'react';
import classroom from "../../assets/class.png";
import Playground  from "../../assets/playground.png";
import  swimmer from "../../assets/swimming.png"
const QZone = () => {
    return (
        <div className='bg-base-200 '> 
             <h3 className='font-bold mb-5 '>QZone</h3>
          <div>
            <img src={Playground} alt="" />
            <img src={classroom} alt="" />
            <img src={swimmer} alt="" />
          </div>
        </div>
    );
};

export default QZone;