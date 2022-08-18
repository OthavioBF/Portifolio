import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
`;

export const Presentation = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 500px;
  background-color: var(--black);
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const PresentationContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 500px;
  width: 100%;
  max-width: 1200px;

  img {
    object-fit: cover;
    width: 500px;
    height: 500px;
    border-radius: 50%;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    flex: 1 1;

    img {
      margin-left: 30px;
      margin-top: 50px;
      height: 300px;
      width: 300px;
    }
  }
`;

export const TextPresentation = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  h1 {
    color: var(--gray-lightest);
    font-family: Roboto, Arial, sans-serif;
    font-weight: medium;
    font-size: 22px;
    line-height: 20px;
  }

  h2 {
    color: var(--gray-lightest);
    font-family: Roboto, Arial, sans-serif;
    font-weight: medium;
    font-size: 32px;
    line-height: 20px;
  }

  h3 {
    color: var(--gray-lightest);
    font-family: Roboto, Arial, sans-serif;
    font-weight: medium;
    font-size: 26px;
    line-height: 20px;
  }

  a {
    margin-top: 25px;
    padding: 10px;
    border: 1px solid var(--gray-lightest);
    border-radius: 4px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: bold;
    font-size: 18px;
    text-decoration: none;
    color: var(--gray-dark);
    cursor: pointer;

    &:hover {
      background-color: var(--gray-lightest);
      transition: all 0.5s ease-in-out;
    }
  }
`;

export const ImageContainer = styled.div`
  width: 70%;
  height: 100%;
  margin-right: 30px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const About = styled.div`
  display: flex;
  justify-content: center;
  width: 100%;
  height: auto;
  background-color: var(--gray-light);
`;

export const AboutContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  margin-top: 100px;
  margin-bottom: 100px;

  @media (max-width: 1023px) {
    flex-direction: column;
  }
`;

export const Text = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 600px;
  padding: 10px;

  h1 {
    font-family: Roboto, Arial, sans-serif;
    font-size: 30px;
    font-weight: medium;
    margin-bottom: 10px;
    color: var(--gray-dark);
  }

  h2 {
    font-family: Roboto, Arial, sans-serif;
    font-size: 24px;
    font-weight: normal;
    margin-top: 10px;
    color: var(--gray-dark);
  }
`;

export const Div = styled.div`
  width: 100%;
  height: 8px;
  background-color: var(--blue-light);
  border-radius: 4px;
`;

export const Skills = styled.div``;

export const Contact = styled.div``;
