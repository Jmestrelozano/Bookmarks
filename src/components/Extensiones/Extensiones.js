import React from "react";
import { CardExtensions } from "./CardExtensions";

export const Extensiones = () => {
  return (
    <div
      id="extencions"
      data-spy="scroll"
      data-target="#navbar-example2"
      data-offset="0"
      className="mt-5 pt-5 text-center"
    >
      <h1 className="titulo__Secundarios">Download the extension</h1>
      <p className="w-50 m-0-auto parrafo__Principal">
        We've got more browsers in the pipline. Please do let us know if you've
        got a favourite you'd like us to prioritize.
      </p>

      <CardExtensions />
    </div>
  );
};
