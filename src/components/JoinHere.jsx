import React from 'react'

const JoinHere = () => {
  return (
    <div className='Dark'>
        <section id="join-page">
        <div className="join-page">         
          <div className="join-details">
            <div className="join-div">
              <div className="j-txt">
                <h2>🩷 Become a Member</h2>
                <p>Join our music-loving <span className="pink">community</span> in just a few steps. Create an account to save favorites, build playlists, and access exclusive features! Already a member? Just sign in!</p>
              </div>
            </div>

            <div className="j-form">
              <div className="join-btn">
                <ul className="join-nav">
                  <li><a href="#" className="join-in"><button>Sign in</button></a></li>
                  <li><a href="#" className="join-up"><button>Sign Up</button></a></li>
                </ul>
              </div>
        
              <form id="form">
                <div className="form-div">
                  <div className="form-div1">
                    <label id="first-name-label">
                        <p>Name </p>
                        <input id="name" type="text" required placeholder="Enter Your Name" />
                    </label>

                    <label id="username-label">
                        <p>Your Username</p>
                        <input id="userrname" type="text" required placeholder="Your Username" />
                    </label>                      
                  </div>
              
                  <div className="form-div2">
                    <label id="email-label">
                        <p>Email Address</p>
                        <input id="email" type="email" required placeholder="Enter your email" />
                    </label>

                    <label id="phone-no-label">
                        <p>Phone Number</p>
                        <input type="tel" id="phone-no" name="phoneNumber" minLength="10" maxLength="15" placeholder="Enter your phone no" />
                    </label>
                  </div>
                </div>

                <div className="submit-info">
                  <input type="submit" value="Sign Up" id="submit" />
                  <p>Or</p>

                  <div className="submit-box">
                   <input type="submit" value="Sign Up With Google" id="sign-up" />
                   <img src="/G-icon.png" alt="Google Icon" />
                  </div>
                </div>                  
              </form>
          </div>
          </div>
        </div>            
      </section>
    </div>
  )
}

export default JoinHere;