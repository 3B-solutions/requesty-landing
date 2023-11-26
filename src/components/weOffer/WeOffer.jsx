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
    <OfferWrapper>
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
          <h2>Проблеми</h2>
        </Title>
        <ProblemsList>
          <ProblemsItem>
            <ProblemsNumber>01</ProblemsNumber>Велика кількість бригад мало
            відомих, мають низькі охоплення
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>02</ProblemsNumber>Є військові що відкривають збори
            самотужки
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>03</ProblemsNumber>Збори гублятся у інформаційному
            просторі соц. мереж
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>04</ProblemsNumber>Низька довіра до благодійних
            зборів
          </ProblemsItem>
        </ProblemsList>
      </Poblems>
      <Poblems>
        <Title>
          <img src={sol} alt="" />
          <h2>Рішення</h2>
        </Title>
        <ProblemsList>
          <ProblemsItem>
            <ProblemsNumber>01</ProblemsNumber>Спрощенний процесс пошуку
            допомоги для військових
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>02</ProblemsNumber>Обєднення всіх не байдужих
            допомогти.
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>03</ProblemsNumber>Підвищення впевненості донерів до
            чесності зборів
          </ProblemsItem>
          <ProblemsItem>
            <ProblemsNumber>04</ProblemsNumber>Перевірені збори та перевірені
            волонетри.
          </ProblemsItem>
        </ProblemsList>
      </Poblems>
    </OfferWrapper>
  );
};
