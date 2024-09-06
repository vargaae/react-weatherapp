import { useNavigate } from "react-router-dom";

import { useEffect } from "react";

import { selectCityItems } from "../../store/city/city.selector";
import { addItemToSlice } from "../../store/city/city.reducer";
import { useDispatch, useSelector } from "react-redux";

import {
  BUTTON_TYPE_CLASSES,
  ButtonComponent,
  StartHeader,
} from "../../components";

import { ButtonContainer } from "./Start.styles";

const Start = () => {
  const navigateTo = useNavigate();

  const dispatch = useDispatch();
  const cityItems = useSelector(selectCityItems);

  const goToWeather = () => {
    navigateTo("/selector");
  };

  useEffect(() => {
    const addCityToSlice = () => {
      dispatch(
        addItemToSlice({
          name: "Budapest",
          id: 111111111111111111111111111111111111111111111111111111111111,
        })
      );
    };

    if (cityItems.name === undefined) {
      addCityToSlice();
    }
  }, []);

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
