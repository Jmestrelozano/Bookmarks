import React from "react";
import "./Contacts.css";

export const Contacts = () => {
  return (
    <div
      id="contacts"
      data-spy="scroll"
      data-target="#navbar-example2"
      data-offset="0"
      className="contacts mt-5"
    >
      <div className="container pt-5 pb-5 w-50 m-0-auto">
        <h6 className="text-center">35,000+ ALREADY JOINED</h6>
        <h1 className="text-center mt-5 mb-5">
          Stay up-to-date with what we're doing
        </h1>

        <div className="d-flex justify-content-center">
          <input
            type="text"
            className="form-control w-50"
            placeholder="Username"
            aria-label="Username"
            aria-describedby="addon-wrapping"
          />
          <button className="ml-3 btn btn__OrangeLight">Contact Us</button>
        </div>
      </div>
    </div>
  );
};
