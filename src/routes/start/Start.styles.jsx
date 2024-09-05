import styled from "styled-components";

export const StartContainer = styled.div`
  padding: 2em;
  text-align: left;

  @media screen and (min-width: 810px) {
    padding: calc(2vw + 1em);
  }
  @media screen and (min-width: 1200px) {
    padding: calc(4vw + 1em) 200px;
  }
  @media screen and (min-width: 1600px) {
    padding: 150px 250px;
  }
`;

export const StartTitle = styled.h2`
  margin: 0 auto;

  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -0.02em;
  text-decoration: none;
  text-transform: uppercase;
  paragraph-spacing: 40px;

  padding-bottom: calc(2vw + 2rem);

  display: flex;
  align-content: center;
  align-items: center;
  flex: none;
  flex-direction: column;
  flex-wrap: nowrap;
  gap: 10px;
  justify-content: center;
  height: min-content;

  font-size: 34px;

  @media screen and (min-width: 810px) {
    flex-direction: row;

    justify-content: space-between;
    text-align: start;
    line-height: 1.2em;
  }
  @media screen and (min-width: 1200px) {
    font-size: 48px;
  }
  @media screen and (min-width: 1600px) {
    font-size: 60px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;
