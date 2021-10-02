import React  from "react";
import "../Navbar/Navbar.css"
import logoNavbar from "../../img/logo-bookmark.svg"

export const Navbar = () => {

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="navbar-brand" href="#!">
      <img src={process.env.PUBLIC_URL + '/logo-bookmark.svg'}  alt="Logo-Navbar"/>
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavAltMarkup"
        aria-controls="navbarNavAltMarkup"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
        <div  className="navbar-nav">
          <a className="nav-link active" href="#features">
            Features <span className="sr-only">(current)</span>
          </a>
          <a className="nav-link" href="#extencions">
            Pricing
          </a>
          <a className="nav-link" href="#contacts">
            Contact
          </a>

          <a style={{width:"8rem" , color:"white"}} className="nav-link btn btn__OrangeLight" href="#!">
            Login
          </a>
        </div>
      </div>
    </nav>
  );
};
