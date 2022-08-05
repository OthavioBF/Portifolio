import styled from "styled-components";

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
  color: var(--gray-medium);
  font-family: Roboto, Arial, sans-serif;
  font-weight: bold;
  font-size: 30px;
  margin-top: 50px;
  margin-bottom: 50px;
`;

export const TitleLine = styled.div``;

export const SkillContent = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-gap: 30px 20px;
  width: 100%;
  height: auto;
  max-width: 1200px;
  margin-bottom: 70px;
`;

export const SkillCard = styled.div`
  border: 3px solid var(--gray-medium);
  border-radius: 4px;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  width: 300px;
  height: 80px;
  padding: 10px;
`;

export const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 5px;
  background-color: var(--black);
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
    font-family: Roboto, Arial, sans-serif;
    font-size: 18px;
    font-weight: medium;
  }
  h2 {
    font-family: Roboto, Arial, sans-serif;
    font-weight: normal;
    font-size: 16px;
  }
`;

export const HtmlIcon = styled.img`
  color: blue;
  width: 60px;
  height: 60px;
`;

export const JsIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const CssIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const GitHubIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const ReactJsIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const ReactNativeIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const StyledComponentsIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const FirebaseIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const FigmaIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const TypescriptIcon = styled.img`
  width: 60px;
  height: 60px;
`;

export const GitIcon = styled.img`
  width: 60px;
  height: 60px;
`;
