import React from 'react';
import './about.css'

function About() {
    return(
        <div>
            <div className='about-section'>
                <div className='left-side'>
                    <div className='contant1'>
                        <p>ABOUT US</p>
                    </div>
                    <div className='contant2'>
                        <h1>Divine bliss at the Krishna temple</h1>
                    </div>
                </div>
                <div className='right-side'>
                    <div className='contant3'>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco.</p>
                    </div>
                    <div className='contant4'>
                        <p>Adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.</p>
                    </div>
                    <div className='contant5'>
                        <h6>View More </h6>
                    </div>
                </div>
            </div>


            <div className='img-section'>
                <div className='img-1'>
                    <img src={`https://gita.themerex.net/wp-content/uploads/2023/03/image-69-copyright.jpg`} style={{width:"83%"}}/>
                </div>
                <div className='img-2'>
                <img src={`https://gita.themerex.net/wp-content/uploads/2023/03/image-59-copyright.jpg`} style={{width:"80%"}}/>
                </div>
                <div className='img-3'>
                <img src={`https://gita.themerex.net/wp-content/uploads/2023/03/image-15-copyright.jpg`} style={{width:"100%"}}/>
                </div>
            </div>
        </div>
    )
}

export default About