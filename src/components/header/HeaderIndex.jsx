import React from "react";
import Horas from "./Horas";
import Nome from "./Nome";

const HeaderIndex = () => {
  return (
    <div className="mt-5 flex justify-around">
      <Nome />
      <Horas />
    </div>
  );
};

export default HeaderIndex;
