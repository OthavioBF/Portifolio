import styled from "styled-components";

export const Container = styled.div`
  box-shadow: 0 0 6px 0 rgba(0, 0, 0, 1);
  width: 100%;
  height: auto;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ProjectsContent = styled.div`
  width: 100%;
  max-width: 1200px;
  height: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 100px;
  margin-bottom: 100px;

  h1 {
    font-family: Roboto, arial, sans-serif;
    font-size: 30px;
    color: var(--gray-light);
  }

  h2 {
    font-family: Roboto, arial, sans-serif;
    font-size: 18px;
    color: var(--gray-light);

    a {
      font-size: 18px;
      text-decoration: none;
      color: var(--blue-light);
    }
  }
`;

export const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  /* align-items: center;
  justify-content: center; */
  width: 100%;
  max-width: 1200px;
  height: auto;
  margin-top: 50px;
  margin-bottom: 50px;
  /* margin: 0 auto; */
`;

export const Card = styled.div`
  width: 250px;
  height: 400px;
  position: relative;
  flex: 1 1 250px;
  margin: 10px;

  img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    border-radius: 0.5rem;
    opacity: 0.8;
    transition: opacity 3s;
  }

  div {
    opacity: 0;
    visibility: hidden;
    position: absolute;
    bottom: 0;
    padding: 2rem;
    text-shadow: 0.3 0.2rem 0.3rem rgba(0, 0, 0, 0.6);
    transition: all ease-in-out 0.2s;

    h2 {
      font-family: Roboto, Arial, sans-serif;
      font-size: 2rem;
      font-weight: 500;
      color: #eee;
    }

    h3 {
      font-family: Roboto, Arial, sans-serif;
      font-size: 2rem;
      font-weight: 500;
      color: #eee;
    }

    p {
      font-family: Roboto, Arial, sans-serif;
      font-weight: 400;
      color: #fff;
      width: 100%;
      margin-bottom: 0.5rem;
    }

    a {
      font-family: Roboto, Arial, sans-serif;

      text-decoration: none;
      color: var(--gray-lightest);
      padding: 7px;
      border: 1px solid var(--gray-lightest);
      border-radius: 4px;

      &:hover {
        border-color: var(--blue-light);
        background-color: var(--blue-light);
        transition: all ease-in-out 0.3s;
      }
    }
  }

  :hover {
    img {
      opacity: 0.3;
    }

    div {
      bottom: 2rem;
      opacity: 1;
      visibility: visible;
    }
  }
`;
