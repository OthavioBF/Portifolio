import React from "react";
import Lottie from "react-lottie";

import Header from "../components/Header";
import SkillForm from "../components/SkillForm";
import code from "../assets/Gif/97639-coding.json";
import Me from "../assets/Images/Me.png";

import {
  Container,
  Presentation,
  PresentationContent,
  TextPresentation,
  ImageContainer,
  About,
  AboutContent,
  Text,
  Div,
  Skills,
  Contact,
} from "./styles";

export function Dashboard() {
  const defaultOptions = {
    loop: true,
    autoplay: true,
    animationData: code,
    rendererSettings: {
      preserveAspectRatio: "xMidYMid slice",
    },
  };
  return (
    <Container>
      <Header />

      <Presentation>
        <PresentationContent>
          <TextPresentation>
            <div>
              <h1>Hi, my name is</h1>
              <br />
              <h2>Othavio Rubim</h2>
              <br />
              <h3>Front-End Developer</h3>
            </div>

            <a href="">Contact Me</a>
          </TextPresentation>
          <ImageContainer>
            <img src={Me} />
          </ImageContainer>
        </PresentationContent>
      </Presentation>

      <About>
        <AboutContent>
          <Lottie options={defaultOptions} height={400} width={400} />
          <Text>
            <h1>About me</h1>
            <Div />
            <h2>
              My name is Othavio Rubim, i have 22 years old and, currently, i am
              a front-end developer using React. My start point at the
              programming world was at 2020, where i saw a promissing market in
              witch i fit well. At first i did't had any contact with code, but
              as soon as i saw the amazing problems i could solve with it, i
              jumped right into it. I love challenges, i look up for them. I am
              always studying and getting new knowledge to perform better at my
              projects.
            </h2>
          </Text>
        </AboutContent>
      </About>

      <SkillForm />

      <Contact id="contact"></Contact>
    </Container>
  );
}
