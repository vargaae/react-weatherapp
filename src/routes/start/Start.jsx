import { useNavigate } from "react-router-dom";

import {
  BUTTON_TYPE_CLASSES,
  ButtonComponent,
  StartHeader,
} from "../../components";

import { ButtonContainer } from "./Start.styles";

const Start = () => {
  const navigateTo = useNavigate();

  const goToWeather = () => {
    navigateTo("/selector");
  };

  return (
    <>
      <StartHeader />
      <ButtonContainer>
        <ButtonComponent
          onClick={goToWeather}
          buttonType={BUTTON_TYPE_CLASSES.start}
          type="button"
        >
          START ASSESSMENT
        </ButtonComponent>
      </ButtonContainer>
    </>
  );
};

export default Start;
