import React from "react";

import Html from "../../assets/Html.svg";
import Css from "../../assets/Css.svg";
import Js from "../../assets/JavaScript.svg";
import react from "../../assets/react.svg";
import GitHub from "../../assets/Github.svg";
import Styled from "../../assets/styled-components.svg";
import Figma from "../../assets/figma-logo.svg";
import Fire from "../../assets/firebase.svg";
import Typescript from "../../assets/typescript.svg";
import Git from "../../assets/git.svg";

import {
  Container,
  Title,
  SkillContent,
  SkillCard,
  CardText,
  Line,
  HtmlIcon,
  JsIcon,
  CssIcon,
  GitHubIcon,
  ReactJsIcon,
  ReactNativeIcon,
  StyledComponentsIcon,
  FirebaseIcon,
  FigmaIcon,
  TypescriptIcon,
  GitIcon,
} from "./styles";

export default function SkillForm() {
  return (
    <Container>
      <Title>Skills</Title>
      <SkillContent>
        <SkillCard>
          <HtmlIcon src={Html} />
          <Line />
          <CardText>
            <h1>HTML5</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <JsIcon src={Js} />
          <Line />
          <CardText>
            <h1>JavaScript</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <CssIcon src={Css} />
          <Line />
          <CardText>
            <h1>CSS3</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <GitHubIcon src={GitHub} />
          <Line />
          <CardText>
            <h1>GitHub</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <ReactJsIcon src={react} />
          <Line />
          <CardText>
            <h1>React.Js</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <ReactNativeIcon src={react} />
          <Line />
          <CardText>
            <h1>React Native</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <StyledComponentsIcon src={Styled} />
          <Line />
          <CardText>
            <h1>Styled-Components</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <FirebaseIcon src={Fire} />
          <Line />
          <CardText>
            <h1>Firebase</h1>
            <h2>Expirience time: 1 year</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <FigmaIcon src={Figma} />
          <Line />
          <CardText>
            <h1>Figma</h1>
            <h2>Expirience time: 1 year</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <TypescriptIcon src={Typescript} />
          <Line />
          <CardText>
            <h1>Typescript</h1>
            <h2>Expirience time: 1 year</h2>
          </CardText>
        </SkillCard>
        <SkillCard>
          <GitIcon src={Git} />
          <Line />
          <CardText>
            <h1>Git</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
      </SkillContent>
    </Container>
  );
}
