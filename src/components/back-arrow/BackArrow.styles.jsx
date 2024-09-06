import styled from "styled-components";

export const BackArrowContainer = styled.div`
  background-color: #142332;
  color: white;

  font-size: 2em;
  font-family: var(--font-family);
  font-optical-sizing: auto;
  font-weight: 500;
  font-style: normal;
  letter-spacing: -1px;

  padding-top: 0.1rem;
  padding-bottom: 1rem;
`;

export const BackArrowTitle = styled.div`
  svg {
    width: 34px;
    height: 34px;
    -webkit-transform: rotate(180deg);
    -moz-transform: rotate(180deg);
    -o-transform: rotate(180deg);
    -ms-transform: rotate(180deg);
    transform: rotate(180deg);
  }

  display: flex;
  align-items: center;
  gap: 30px;

  span {
    flex: 3;
  }
  .mail {
    flex: auto;
  }

  button {
    // flex: 1;
    text-align: start;
  }

  @media (max-width: 809px) and (min-width: 0px) {
    display: flex;
    flex-direction: column;
  }

  @media screen and (min-width: 810px) {
    display: flex;
    justify-content: space-around;
    font-size: 1.2em;

    button {
      margin-right: 6em;
    }
  }
  @media screen and (min-width: 1200px) {
    font-size: 1.3em;
    button {
      margin-right: 6em;
    }
  }
  @media screen and (min-width: 1600px) {
    font-size: 1.5em;
  }
`;
