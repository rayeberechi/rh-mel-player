import React from 'react';

const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-abt">
            <h1>About Us</h1>
            <p>Discover, stream, and enjoy the best music in one place. Whether you love trending hits or timeless classics, our platform connects you to an endless collection of songs tailored to your taste. Stay updated with weekly charts, curated playlists, and much more!</p>
        </div>
        
        <div className="foot-grid1">
            <div className="fnav-1">
                <h4>Ray | Mel</h4>
            </div>

            <div className="fnav-links">
                <ul>
                    <li><a href="#playlist">All Songs</a></li>
                    <li><a href="#">Weekly Top Songs</a></li>
                    <li><a href="#playlist">Playlist</a></li>
                </ul>
            </div>
        </div>

        <div className="foot-grid2">
          <div className="fnav-2">
                <h4>Access</h4>
          </div>
                
            <div className="fnav-links">
                <ul>
                <li><a href="#">Join Us</a></li>
                </ul>
            </div>
        </div>    

        <div className="foot-grid3">
          <div className="fnav-3">
                <h4>Contact</h4>
          </div>
                
            <div className="fnav-links">
                <ul>
                <li><a href="#">About</a></li>
                <li><a href="#">Social Media</a></li>
                </ul>
            </div>
        </div>            
  
        <div className="footer-contact">
            <div className="footer-logo">
                <img src="/Ray Melodies.png" alt="logo" />
            </div>
  
            <div className="social-icons">
                <a href="#">
                    <img src="/fb-logo.svg" alt="fb-logo"/>
                </a>
                <a href="#">
                    <img src="/X-logo.svg" alt="x-logo"/>
                </a>
                <a href="#">
                    <img src="/linkedin-logo.svg" alt="linkedin-logo"/>
                </a>
                <a href="#">
                    <img src="/insta-logo.svg" alt="insta-logo"/>
                </a>
            </div>
        </div>  
    </div>
  )
}

export default Footer;