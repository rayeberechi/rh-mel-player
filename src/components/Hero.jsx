import React from 'react';

const Hero = () => {
  return (
    <div className='dark'>
        <div className="hero-section">
            <div className="hero-header">
                <div className="hero-nav">
                    <div className="logo">
                        <img src="/Ray Melodies.png" alt="logo" />
                    </div>
            
                    <div className="nav-btn">
                        <ul className="hero-nav-links">
                            <li><a href="#form" className="sign-in"><button>Sign in</button></a></li>
                            <li><a href="#form" className="sign-up"><button>Sign Up</button></a></li>
                        </ul>

                        <div className="music-icon">
                            <a href="#playlist"><i className="fa-solid fa-music pink"></i></a>
                        </div>
                    </div>
                </div>

                <div className="hero-content">
                    <div className="hero-text">
                        <div className="txt1">
                            <h1>All the <span>Best Songs</span> in One Place</h1>
                            <p>You can access an amazing collection of music on our website. Whatever your taste in music, we have it all fr you in one place, by one click</p>
                        </div>

                        <div className="txt2">
                            <a href="#playlist"><button>Discover More</button></a>
                        </div>
                    </div>

                    <div className="hero-img">
                        <img src="/PinkHeadsetGirl.png" alt="pink-headset hand-biz-card" />
                    </div>
                </div>
            </div>
        </div>
    </div>
    )
}

export default Hero;