import React from "react";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css/sea-green";
import soldcab from "../img/soldierCabinet.png";
import volcab1 from "../img/VolunteerRequests.png";
import volcab2 from "../img/VolunteerGethers.png";
import gethercard from "../img/GetheringCard.png";
import main from "../img/homepage.png";
import { PageImage } from "./Slider.styled";

export const Slider = () => {
  return (
    <>
      <Splide aria-label="Вигляд сторінок">
        <SplideSlide>
          <PageImage src={main} alt="Image0" />
        </SplideSlide>
        <SplideSlide>
          <PageImage src={soldcab} alt="Image1" />
        </SplideSlide>
        <SplideSlide>
          <PageImage src={volcab1} alt="Image2" />
        </SplideSlide>
        <SplideSlide>
          <PageImage src={volcab2} alt="Image1" />
        </SplideSlide>
        <SplideSlide>
          <PageImage src={gethercard} alt="Image2" />
        </SplideSlide>
      </Splide>
    </>
  );
};
