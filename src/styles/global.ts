import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --background: #384955; 
    --red: #E52E4D;
    --green: #44C08A;

    --blue-light: #26bdff;
    --blue-dark: #1E2251;

    --text-title: #363F5F;
    --text-body: #969CB3;

    --gray-lightest: #E4E6F0;
    --gray-light: #C0C1C6;
    --gray-medium: #7B7B7B;
    --gray-dark: #5C5958;

    --black: #312F2F;
  }

  * {
    margin: 0;
    padding: 0; 
    box-sizing: border-box;
  }


  html { 
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }

    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  @media (max-width: 720px) {

  }

  body { 
    -webkit-font-smoothing: antialiased;
    background: var(--black);

    &::-webkit-scrollbar {
    width: 1rem;
    }
    &::-webkit-scrollbar-track {
    background: var(--black);
    }
    &::-webkit-scrollbar-thumb {
    background-color: #26bdff;
    border-radius: 1.2rem;
    border: 4px solid #26bdff;
    }
  }

  button { 
    cursor: pointer;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;
