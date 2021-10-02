import React from "react";
import imgHeader from "../../img/illustration-hero.svg";
import { ButtonsHeader } from "./ButtonsHeader";
import "../Header.js/Header.css";

export const Header = () => {
  return (
    <div className="pt-5 mt-5 d-flex flex-row">
      <div className="row">
        <div className="d-flex justify-content-center flex-column order-1 order-md-0 order-lg-0 col-sm-5 header__Info">
          <h1 className="header__Info--Titulo">A Simple Bookmark Manager</h1>
          <p className="mt-4 mb-4 parrafo__Principal  header__Info--P">
            A clean and simple interface to organize your favourite websites.
            Open a new browser tab and see your sites load instatnly. Try it for
            free.
          </p>

          <ButtonsHeader />
        </div>

        <div className="col-sm-7 header__Img">
          <img className="w-100" src={imgHeader} alt="imagen-header" />
        </div>
      </div>
    </div>
  );
};
