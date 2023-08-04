import React from 'react';
import './hero.css'
import img1 from '../image/heroimage.jpg'

function Hero() {
    return(
        <div>
          <div className='hero-section'>
            <div className='hero-img'>
                <img src={img1} style={{width:"100%",height:"600px",opacity:"0.9"}}/>
            </div>
            <div className='hero-contant'>
                <p className='contant-1'>OUR MISSION IS DIVINE BLISS</p>
                <p className='contant-2'>Transformative Experience Towards Enlightenment</p>
                <p className='contant-3'>READ MORE</p>
            </div>
          </div>
        </div>
    )
}
export default Hero
