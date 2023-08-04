import React from 'react';
import './boxpart.css'

function Boxpart() {
    return(
        <div>
            <div className='boxpart'>
                <div className='boxpart-1'>     
                        <p>THE WISDOM BLOG</p>
                </div>
                <div className='boxpart-2'>
                    <h2>Find valuable information and<br></br> inspiration in our stories</h2>
                </div>
                <div className='boxpart-3'>
                    <div className='box-1'>
                         <div className='box-img1'>
                            <img src={`https://gita.themerex.net/wp-content/uploads/2020/04/image-88-copyright-1536x1024.jpg`} style={{width:"90%"}}/>
                         </div>
                         <div className='box-name1'>
                            <h4>KRISHNA</h4>
                         </div>
                         <div className='box-con1'>
                            <h2>Traditions of Hare <br></br>Krishna holidays</h2>
                         </div>
                    </div>
                    <div className='box-2'>
                        <div className='box-img2'>
                        <img src={`https://gita.themerex.net/wp-content/uploads/2020/04/image-87-copyright-1536x1024.jpg`} style={{width:"90%"}}/>
                        </div>
                        <div className='box-name2'>
                        <h4>KRISHNA</h4>
                        </div>
                        <div className='box-con2'>
                            <h2>What are the 4 rules for<br></br> Krishna devotee?</h2>
                        </div>
                    </div>
                    <div className='box-3'>
                        <div className='box-img3'>
                        <img src={`https://gita.themerex.net/wp-content/uploads/2022/04/image-3-copyright-1536x1024.jpg`} style={{width:"90%"}}/>
                        </div>
                        <div className='box-name3'>
                        <h4>KRISHNA</h4>
                        </div>
                        <div className='box-con3'>
                            <h2>5 most unusual rituals in <br></br>the Hare Krishna temple</h2>
                        </div>
                    </div>
                </div>
                <div className='boxpart-4'>
                    <h5>VIEW ALL ARTICLES</h5>
                </div>
            </div>
        </div>
    )
}

export default Boxpart