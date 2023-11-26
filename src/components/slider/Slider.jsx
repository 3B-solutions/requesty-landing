import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import soldcab from "../img/soldierCabinet.png";
import volcab1 from "../img/VolunteerRequests.png";
import volcab2 from "../img/VolunteerGethers.png";
import gethercard from "../img/GetheringCard.png";
import main from "../img/homepage.png";

export const Slider = () => {
  return (
    <>
      <Splide aria-label="Вигляд сторінок">
        <SplideSlide>
          <img src={main} alt="Image0" />
        </SplideSlide>
        <SplideSlide>
          <img src={soldcab} alt="Image1" />
        </SplideSlide>
        <SplideSlide>
          <img src={volcab1} alt="Image2" />
        </SplideSlide>
        <SplideSlide>
          <img src={volcab2} alt="Image1" />
        </SplideSlide>
        <SplideSlide>
          <img src={gethercard} alt="Image2" />
        </SplideSlide>
      </Splide>
    </>
  );
};
