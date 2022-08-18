import styled, { css } from "styled-components";
import { ReactComponent as IconHtml } from "../../assets/Html.svg";
import { ReactComponent as IconJs } from "../../assets/JavaScript.svg";
import { ReactComponent as IconCss } from "../../assets/Css.svg";
import { ReactComponent as IconReact } from "../../assets/react.svg";
import { ReactComponent as Iconstyledcomponents } from "../../assets/styled-components.svg";
import { ReactComponent as IconTypescript } from "../../assets/typescript.svg";
import { ReactComponent as IconGitHub } from "../../assets/Github.svg";
import { ReactComponent as IconGit } from "../../assets/git.svg";
import { ReactComponent as IconFirebase } from "../../assets/firebase.svg";
import { ReactComponent as IconFigma } from "../../assets/figma-logo.svg";

interface IconProps {
  color: string;
}

// const svgStyles

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: var(--gray-dark);
`;

export const Title = styled.h1`
  color: var(--gray-light);
  font-family: Roboto, Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: 100px;
`;

export const TitleLine = styled.div`
  margin-top: 20px;
  margin-bottom: 40px;
  width: 150px;
  height: 5px;
  border-radius: 5px;
  background-color: var(--blue-light);
`;

export const SkillContent = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin-bottom: 130px;
`;

export const SkillCard = styled.div<IconProps>`
  border: 3px solid var(--gray-light);
  border-radius: 8px;
  display: flex;
  flex: 0 1 300px;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 80px;
  padding: 10px;
  margin: 30px;

  &:hover {
    box-shadow: 10px #0000;

    transition: all 0.3s ease-in-out;
    border-color: ${(props) => props.color};
  }

  &:hover svg {
    transition: all 0.3s ease-in-out;
    fill: ${(props) => props.color};
  }
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--blue-light);
  height: 40px;
  width: 4px;
  margin-left: 7px;
`;

export const CardText = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-left: 7px;
  h1 {
    color: var(--gray-light);
    font-family: Roboto, Arial, sans-serif;
    font-size: 18px;
    font-weight: medium;
  }
  h2 {
    color: var(--gray-light);
    font-family: Roboto, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const HtmlIcon = styled(IconHtml)`
  fill-rule: evenodd;
  width: 60px;
  height: 60px;
`;

export const JsIcon = styled(IconJs)`
  fill-rule: evenodd;

  width: 60px;
  height: 60px;
`;

export const CssIcon = styled(IconCss)`
  width: 60px;
  height: 60px;
`;

export const GitHubIcon = styled(IconGitHub)`
  width: 60px;
  height: 60px;
`;

export const ReactJsIcon = styled(IconReact)`
  width: 60px;
  height: 60px;
`;

export const ReactNativeIcon = styled(IconReact)`
  width: 60px;
  height: 60px;
`;

export const StyledComponentsIcon = styled(Iconstyledcomponents)`
  width: 60px;
  height: 60px;
`;

export const FirebaseIcon = styled(IconFirebase)`
  width: 60px;
  height: 60px;
`;

export const FigmaIcon = styled(IconFigma)`
  width: 60px;
  height: 60px;
`;

export const TypescriptIcon = styled(IconTypescript)`
  width: 60px;
  height: 60px;
`;

export const GitIcon = styled(IconGit)`
  width: 60px;
  height: 60px;
`;
