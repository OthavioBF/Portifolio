import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  width: 100%;
  height: 60px;
  align-items: center;
  justify-content: center;
  background-color: var(--black);
`;

export const Menu = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  align-items: center;
  justify-content: space-between;

  h1 {
    font-family: Roboto, Arial, sans-serif;
    color: #26bdff;
  }

  ul {
    display: flex;
    li {
      height: 100%;
      width: 100%;
      border-radius: 4px;
      list-style: none;
      margin-left: 30px;
      padding: 5px;

      a {
        text-decoration: none;
        font-family: Roboto, Arial, sans-serif;
        font-size: 20px;
        color: var(--gray-dark);
      }

      &:hover {
        cursor: pointer;
        background-color: #26bdff;
        transition: all ease-in-out 0.3s;
      }
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    padding: 10px;

    ul {
      li {
        a {
        font-size: 18px;
      }
    }
  }
`;
