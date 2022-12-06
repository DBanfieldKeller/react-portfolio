import React, {useState} from 'react';

function Navigation(props) {   


    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('AboutMe');
                }}>About Me</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('Projects')
                }}>Projects</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('ContactMe')
                }}>Contact Me</div>
              </li>
              <li className="nav-item">
                <div className="nav-link" onClick={(e)=>{
                  props.setPage('Resume')
                }}>Resume</div>
              </li>
            </ul>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;