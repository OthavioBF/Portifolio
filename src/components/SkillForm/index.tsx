import React from "react";

import Html from "../../assets/Html.svg";
import Css from "../../assets/Css.svg";
import Js from "../../assets/JavaScript.svg";

import {
  Container,
  Title,
  TitleLine,
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
      <TitleLine />
      <SkillContent>
        <SkillCard color="tomato">
          <HtmlIcon />
          <Line />
          <CardText>
            <h1>HTML5</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#F0DB4F">
          <JsIcon />
          <Line />
          <CardText>
            <h1>JavaScript</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#264de4">
          <CssIcon />
          <Line />
          <CardText>
            <h1>CSS3</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="orange">
          <GitHubIcon />
          <Line />
          <CardText>
            <h1>GitHub</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#4c768d">
          <ReactJsIcon />
          <Line />
          <CardText>
            <h1>React.Js</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#1c2c4c">
          <ReactNativeIcon />
          <Line />
          <CardText>
            <h1>React Native</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="pink">
          <StyledComponentsIcon />
          <Line />
          <CardText>
            <h1>Styled-Components</h1>
            <h2>Expirience time: 2 years</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#F0DB4F">
          <FirebaseIcon />
          <Line />
          <CardText>
            <h1>Firebase</h1>
            <h2>Expirience time: 1 year</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="pink">
          <FigmaIcon />
          <Line />
          <CardText>
            <h1>Figma</h1>
            <h2>Expirience time: 1 year</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#007acc">
          <TypescriptIcon />
          <Line />
          <CardText>
            <h1>Typescript</h1>
            <h2>Expirience time: 1 year</h2>
          </CardText>
        </SkillCard>
        <SkillCard color="#f34f29">
          <GitIcon />
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
