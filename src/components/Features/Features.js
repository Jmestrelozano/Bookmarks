import React from "react";
import { OptionsFeatures } from "./OptionsFeatures";
import "../Features/Features.css";
export const Features = () => {
  
  return (
    <div
      id="features"
      data-spy="scroll"
      data-target="#navbar-example2"
      data-offset="0"
      className="pt-5 mt-5"
    >
      <h1 className="text-center titulo__Secundarios">Features</h1>
      <p className="text-center w-50 parrafo__Principal  features__Parrafo">
        Our aim is to make it quick and easy for you to access your favourite
        websites. Your bookmarks sync between your devices so you can access
        them on the go.
      </p>

      <OptionsFeatures />
    </div>
  );
};
