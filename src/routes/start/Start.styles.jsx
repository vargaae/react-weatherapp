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

export const ButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  align-content: center;
  align-items: center;
  margin-top: 1.5rem;
  margin-bottom: 2rem;
`;
