import styled from "styled-components";

export const SelectorContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.04em;

  img {
    height: 1.3em;
  }

  .background {
    background-position: center;
    background-color: #ebeefb;
    width: 100%;
    padding: 15px;
  }

  .background .box {
    width: 767px;
    height: 100%;
    border-radius: 4px;
    border: 2px solid #fff;
    margin: 0 auto;
    overflow-y: auto;
    box-shadow: 0 0 20px rgba(0, 0, 0, 0.2);
    padding: 15px;
  }

  .box .current-weather-details-box {
    width: 100%;
    min-height: 60dvh;

    margin-top: 15px;
    display: flex;
    flex-direction: column;
    background-color: var(--color-bg);
    border-radius: 4px;
    padding: 15px;
  }

  .current-weather-details-box .details-box-header {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  @media screen and (min-width: 810px) {
    img {
      height: 1.3em;
    }
  }
  @media (max-width: 768px) {
    .background .box {
      width: 100%;
    }
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 3.5rem;
  display: flex;
  justify-content: center;
  color: var(--color-bg);
`;

export const PlusButtonContainer = styled.div`
  display: flex;
  justify-content: center;
  color: var(--color-bg);
`;
