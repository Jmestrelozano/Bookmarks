import React from "react";
import "./Footer.css";
import logoFooter from "../../img/logo-bookmark-white.svg"
export const Footer = () => {
  return (
    <footer className="d-flex justify-content-between align-items-center">
      <div className="d-flex flex-row justify-content-around footer__BoxOne">
        <img src={logoFooter} alt="logo-footer" />
        <ul className="d-flex justify-content-between">
          <li>Features</li>
          <li>Princing</li>
          <li>Contact</li>
        </ul>
      </div>

      <div className="footer__BoxTwo">
        <ul className="d-flex justify-content-around">
          <li><i className="fab fa-facebook-square"></i></li>
          <li><i className="fab fa-twitter"></i></li>
        </ul>
      </div>
    </footer>
  );
};
