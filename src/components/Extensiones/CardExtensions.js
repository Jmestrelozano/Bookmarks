import React from "react";
import google from "../../img/logo-chrome.svg";
import firefox from "../../img/logo-firefox.svg";
import opera from "../../img/logo-opera.svg";
import dots from "../../img/bg-dots.svg";
import "./CardExtensiones.css";

export const CardExtensions = () => {
  return (
    <div className="card-deck pt-5 mt-5">
      <div
        style={{ height: "22rem" }}
        className="border-0 card shadow bg-white rounded"
      >
        <img
          src={google}
          className="card-img-top w-25 pt-5  d-flex align-self-center"
          alt="google"
        />
        <div className="pl-0 pr-0 card-body">
          <h5 className="card-title text-center">Add to Chrome</h5>
          <p className="card-text  text-center parrafo__Principal">
            Miniumum version 62
          </p>
          <img className="w-100" src={dots} alt="dots" />
          <button className="mt-4 d-flex m-0-auto btn btn__PurpleLight">
            Add & Install Extension
          </button>
        </div>
      </div>
      <div
        style={{ height: "22rem" }}
        className="border-0 card shadow bg-white rounded mt-5"
      >
        <img
          src={firefox}
          className="card-img-top w-25 pt-5  d-flex align-self-center"
          alt="firefox"
        />
        <div className="pl-0 pr-0 card-body">
          <h5 className="card-title text-center">Add to Firefox</h5>
          <p className="card-text text-center parrafo__Principal">
            Miniumum version 55
          </p>
          <img className="w-100" src={dots} alt="dots" />
          <button className="mt-4 d-flex m-0-auto btn btn__PurpleLight">
            Add & Install Extension
          </button>
        </div>
      </div>
      <div
        style={{ height: "22rem" }}
        className="border-0 card shadow bg-white rounded mt-10"
      >
        <img
          src={opera}
          className="card-img-top w-25 pt-5  d-flex align-self-center"
          alt="opera"
        />
        <div className="pl-0 pr-0 card-body">
          <h5 className="card-title text-center">Add to Opera</h5>
          <p className="card-text text-center parrafo__Principal">
            Miniumum version 46
          </p>
          <img className="w-100" src={dots} alt="dots" />
          <button className="mt-4 d-flex m-0-auto btn btn__PurpleLight">
            Add & Install Extension
          </button>
        </div>
      </div>
    </div>
  );
};
