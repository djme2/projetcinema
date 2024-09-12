import React from 'react';
import {  Link } from 'react-router-dom';


const Nav = () => {

 
return (
      <nav className="navbar navbar-expand-lg bg-dark w-100 mx-auto" data-bs-theme="dark"  >
        <div className="container-fluid"  >
          <a className="navbar-brand" href="#"    >FAVFLICKS  </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
            data-bs-target="#navbarColor02" aria-controls="navbarColor02"
            aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarColor02">
            <ul className="navbar-nav me-auto">
            </ul>
            <form className="d-flex">
              <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success" type="submit">Search</button>
              <nav>
        <Link to="/accueil">Accueil</Link>
        <Link to="/details">Details</Link>
  
    </nav>
             
            </form>
           
          </div>
        </div>
      </nav>
)
 
}; 
export default Nav;