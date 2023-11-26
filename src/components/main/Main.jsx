import React from "react";
import MainSection from "components/mainSection/MainSection";
import { WeOffer } from "components/weOffer/WeOffer";

const Main = () => {
  return (
    <div>
      <WeOffer />
      <MainSection id="howitworks" />
    </div>
  );
};

export default Main;
