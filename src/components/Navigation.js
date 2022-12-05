import React, {useState} from 'react';

function Navigation(props) {   

    return (
        <nav className="navbar navbar-expand-lg bg-light">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <div className="nav-link active" aria-current="page" onClick={(e)=>{
                  props.setPage('AboutMe')
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
                <a className="nav-link" href="#">Resume</a>
              </li>
            </ul>
            <form className="d-flex" role="search">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
              <button className="btn btn-outline-success" type="submit">Search</button>
            </form>
          </div>
        </div>
      </nav>
  );
}

export default Navigation;