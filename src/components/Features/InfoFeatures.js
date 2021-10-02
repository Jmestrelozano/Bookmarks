import React, { Fragment} from "react";
import { DataFeatures } from "../../data/dataFeatures";
import "../Features/InfoFeatures.css";
export const InfoFeatures = ({ optionList }) => {
 

  const filterFeature = DataFeatures.filter((info) => info.id === optionList);
 
  return (
    <Fragment>
      {filterFeature.map((data) => {
        return (
          <div
            className="mt-5 d-flex justify-content-center flex-colum infoFeature"
            key={data.titulo}
          >
            <div className="infoFeature__Img">
              <img
                className="infoFeature__Img--Img"
                src={data.image}
                alt={data.titulo}
              />
            </div>
            <div className="infoFeature__Info">
              <h1 >{data.titulo}</h1>

              <p>{data.texto}</p>
            </div>
          </div>
        );
      })}
    </Fragment>
  );
};
