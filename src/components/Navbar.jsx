import React from 'react';

export default function Navbar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-${props.theme}`} 
          style={{boxShadow: "rgba(100, 100, 111, 0.2) 0px 7px 29px 0px", backgroundColor : props.theme ==='dark' ? '#212529' : '#A5E3B9' }}
          // #e6fd0d17  #A5E3B9
        >
          <div className="container-fluid mx-3">
            <a className="navbar-brand mx-3" href="/">TextUtils</a>

            <button className="navbar-toggler mx-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon mx-1 "></span>
            </button>


            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="/">Home</a>
                </li>
                <li className="nav-item">
                  
                  <a className="nav-link" href="/">About</a>
                </li>
              </ul>
              <form className="d-flex mx-3" role="search">
                {/* -- Toggle Button Added */}

                <div className={`form-check form-switch text-${props.theme==='light' ? 'dark' : 'light'}`} >  
                  {/* for changing text section --> JS written using ternary operator */}
                  <input 
                  className="form-check-input"  
                  type="checkbox" 
                  role="switch" 
                  id="flexSwitchCheckDefault" 
                  onClick= {props.toggleTheme}
                  style={{border : '0.5px solid gray', cursor: "pointer"}}
                  />
                  <label className="form-check-label" htmlFor="flexSwitchCheckDefault">Change Theme</label>
                </div>
                
              </form>
            </div>
          </div>
        </nav>
    )
}


