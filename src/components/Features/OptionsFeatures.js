import React, { useEffect, useRef, useState } from "react";
import "../Features/OptionsFeatures.css";
import { InfoFeatures } from "./InfoFeatures";

export const OptionsFeatures = () => {
  const [optionList, setOptionList] = useState("Simple Bookmarking");
  const listMenu = useRef("");
  const selectOptionMenuList = (e) => {
    setOptionList(e.target.textContent);
  };

  useEffect(() => {
    for (let list of listMenu.current.children) {
      const listText = list.children[0].textContent;
      listText === optionList
        ? list.children[1].classList.add("features__Menu--Content")
        : list.children[1].classList.remove("features__Menu--Content");
    }
  }, [optionList]);

  return (
    <>
      <ul
        ref={listMenu}
        onClick={selectOptionMenuList}
        style={{ borderBottom: "1px solid #ccc" }}
        className="d-flex justify-content-between mt-5 features__Menu"
      >
        <div className="features__Menu--List">
          <li className="mb-2">Simple Bookmarking</li>
          <div></div>
        </div>

        <div className="features__Menu--List">
          <li className="mb-2">Speedy Searching</li>
          <div></div>
        </div>

        <div className="features__Menu--List">
          <li className="mb-2">Easy Sharing</li>
          <div></div>
        </div>
      </ul>

      <InfoFeatures optionList={optionList} />
    </>
  );
};
