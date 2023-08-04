import React from 'react';
import './navbar.css'


function Navbar()
{
    return(
        <div>
            <div className='navigation'>
                <div className='rightside'>
                      <div className='nav-logo'>
                        <h1>Bluene</h1>
                      </div>
                </div>
              <div className='rightside'>
                      <div className='nav-menu'>
                           <a href='#'>Home</a>
                           <a href='#'>Pages</a>
                           <a href='#'>Blog</a>
                           <a href='#'>Donation</a>
                           <a href='#'>Shop</a>
                           <a href='#'>Contacts</a>
                       </div>
                       <div className='nav-btn'>
                           <span>DONATE</span>
                       </div>
              </div>
            
            </div>
        </div>
    )
}

export default Navbar