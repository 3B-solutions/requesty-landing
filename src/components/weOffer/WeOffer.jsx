import React from "react";
import prob from "../img/Prob.svg";
import sol from "../img/Sol.svg";
import {
  OfferWrapper,
  Poblems,
  ProblemsList,
  ProblemsItem,
  ProblemsNumber,
  Title,
  Offers,
  OffersDescr,
  LeftWrapper,
} from "./WeOffer.style";

export const WeOffer = () => {
  return (
    <OfferWrapper id="weoffer">
      <LeftWrapper>
        <Offers>Ми пропонуємо</Offers>
        <OffersDescr>
          Інструмент для вдосконалення пошуку та організації прозорих зборів, що
          гарантує високий рівень довіри до благодійних ініціатив.
        </OffersDescr>
      </LeftWrapper>
      <Poblems>
        <Title>
          <img src={prob} alt="" />
          <h2>Проблеми які ми вирішуємо</h2>
        </Title>
        <ProblemsList>
          <ProblemsItem>
            <ProblemsNumber>01</ProblemsNumber>Велика кількість новостворених
            підрозділів мають низьку охопленність.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>02</ProblemsNumber>Іноді військові відкривають збори
            самотужки.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>03</ProblemsNumber>Збори гублятся у інформаційному
            просторі соц. мереж.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>04</ProblemsNumber>Низька довіра до невеличких
            зборів.
          </ProblemsItem>
        </ProblemsList>
      </Poblems>
      <Poblems>
        <Title>
          <img src={sol} alt="" />
          <h2>Наші переваги</h2>
        </Title>
        <ProblemsList>
          <ProblemsItem>
            <ProblemsNumber>01</ProblemsNumber>Спрощенний процесс пошуку
            допомоги для військових.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>02</ProblemsNumber>Об'єднання всіх небайдужих в
            одному місці.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>03</ProblemsNumber>Підвищення рівня довіри донерів
            до зборів.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>04</ProblemsNumber>Захист від шахрайських схем.
          </ProblemsItem>
        </ProblemsList>
      </Poblems>
    </OfferWrapper>
  );
};
