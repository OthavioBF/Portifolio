import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 600px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ContactContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  max-width: 1200px;
  height: 500px;
  margin-top: 100px;
  margin-bottom: 100px;
`;

export const ButtonContainer = styled.div`
  width: 100%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  button {
    width: 100px;
    height: 40px;
    border: 1px solid var(--gray-lightest);
    border-radius: 5px;
    background-color: var(--black);
    color: var(--gray-dark);
    font-size: 18px;
    font-family: Roboto, Arial, sans-serif;
    font-weight: bold;

    &:hover {
      cursor: pointer;
      transition: all 0.3s ease-in-out;
      background-color: var(--gray-lightest);
    }
  }

  @media (max-width: 768px) {
    padding-top: 10px;
  }
`;

export const TitleContainer = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-family: Roboto, Arial, sans-serif;
    font-size: 30px;
    font-weight: bold;
    color: var(--gray-light);
  }

  h2 {
    margin-top: 10px;
    font-family: Roboto, Arial, sans-serif;
    font-size: 20px;
    font-weight: bold;
    color: var(--gray-light);
  }

  @media (max-width: 768px) {
    padding: 10px;
    h1 {
      font-size: 25px;
    }

    h2 {
      font-size: 18px;
    }
  }
`;

export const Line = styled.div`
  margin-top: 10px;
  width: 400px;
  height: 5px;
  border-radius: 5px;
  background-color: var(--blue-light);

  @media (max-width: 768px) {
    width: 200px;
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const Form = styled.div`
  display: flex;
  flex-direction: column;

  width: 600px;
  height: 300px;

  input {
    margin-top: 15px;
    padding-left: 10px;
    border: 2px solid var(--black);
    border-radius: 8px;
    width: 300px;
    height: 40px;
    outline: none;
    background-color: var(--gray-medium);

    &:focus {
      transition: all 0.3s ease-in-out;
      border: 3px solid var(--blue-light);
    }

    &::placeholder {
      color: var(--gray-lightest);
    }
  }

  @media (max-width: 768px) {
    align-items: center;
    input {
      width: 350px;
    }
  }
`;

export const TextArea = styled.div`
  input {
    border: 2px solid var(--black);
    border-radius: 8px;
    width: 100%;
    height: 100px;
    outline: none;
    background-color: var(--gray-medium);

    &:focus {
      transition: all 0.5s ease-in-out;
      border: 3px solid var(--blue-light);
    }

    &::placeholder {
      color: var(--gray-lightest);
    }
  }

  @media (max-width: 768px) {
    input {
      width: 350px;
    }
  }
`;

export const NameContainer = styled.div`
  display: flex;
  justify-content: space-between;

  input {
    border: 2px solid var(--black);
    border-radius: 8px;
    width: 280px;
    height: 40px;
    outline: none;
    background-color: var(--gray-medium);

    &:focus {
      transition: all 0.5s ease-in-out;
      border: 3px solid var(--blue-light);
    }

    &::placeholder {
      color: var(--gray-lightest);
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;

    input {
      width: 350px;
    }
  }
`;
