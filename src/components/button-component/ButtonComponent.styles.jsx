import styled from "styled-components";

import { SpinnerContainer } from "../spinner/Spinner.styles";

export const BaseButton = styled.button`
  line-height: 50px;
  letter-spacing: 0.5px;
  padding: 0 35px 0 35px;
  font-size: 15px;
  background-color: black;
  color: white;
  text-transform: uppercase;
  /* font-family: "Open Sans Condensed"; */
  font-weight: bolder;
  border: 1px solid transparent;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: 0.6s cubic-bezier(0.25, 0.45, 0.45, 0.95);

  &:hover {
    background-color: white;
    color: black;
    border: 1px solid black;
  }
`;

export const StartButton = styled(BaseButton)`
  width: auto;
  padding: 0px 60px;
  height: 2.9em;
  background-color: rgb(65, 112, 232);
  // background-color: var(--color-prime);
  color: white;
  text-transform: none;
  font-size: 20px;
  line-height: 2.9em;
  font-family: var(--font-family-numbers);
  font-weight: 500;
  place-items: center;
  place-content: center;
  text-decoration: none;
  font-style: normal;
  letter-spacing: 0em;
  color: rgb(255, 255, 255);
  border-radius: 0px;
  border: none;

  &:hover {
    color: rgb(255, 255, 255);
    background-color: #000;
    border: none;
  }
`;

export const BackButton = styled(BaseButton)`
  width: auto;
  padding: 0px 60px;
  height: 2.9em;
  background-color: #142332;
  color: white;
  // color: #142332;
  text-transform: none;
  font-size: 20px;
  line-height: 2.9em;
  font-family: var(--font-family-numbers);
  font-weight: 500;
  place-items: center;
  place-content: center;
  text-decoration: none;
  font-style: normal;
  letter-spacing: 0em;
  border-radius: 0px;
  border: none;

  &:hover {
    color: #142332;
    background-color: var(--color-text);
    border: none;
  }
`;

export const InvertedButton = styled(BaseButton)`
  width: auto;
  height: 50px;
  line-height: 50px;
  background-color: white;
  color: black;
  border: 1px solid black;

  &:hover {
    background-color: black;
    color: white;
  }
`;

export const ButtonSpinner = styled(SpinnerContainer)`
  width: 30px;
  height: 30px;
`;
