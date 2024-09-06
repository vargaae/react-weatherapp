import { useNavigate } from "react-router-dom";

import {
  BreadcrumbNav,
  ButtonComponent,
  BUTTON_TYPE_CLASSES,
} from "../../components";

import { plus } from "../../assets";
import {
  ButtonContainer,
  PlusButtonContainer,
  SelectorContainer,
} from "./Selector.styles";
import { useSelector } from "react-redux";
import { selectCityItems } from "../../store/city/city.selector";

const Selector = () => {
  const navigateTo = useNavigate();

  const cityItems = useSelector(selectCityItems);

  const headerTitle = "Page 1: City Selector";

  const goToSearch = () => {
    navigateTo("/search");
  };
  const goToWeather = () => {
    navigateTo("/weather");
  };

  return (
    <SelectorContainer>
      <BreadcrumbNav headerTitle={headerTitle} />
      <div className="background">
        <div className="box">
          <div className="current-weather-details-box">
            <ButtonContainer>
              <ButtonComponent
                onClick={goToWeather}
                buttonType={BUTTON_TYPE_CLASSES.back}
                type="button"
              >
                {cityItems != 0
                  ? cityItems[cityItems.length - 1].name
                  : "Budapest"}
              </ButtonComponent>
            </ButtonContainer>
            <PlusButtonContainer>
              <ButtonComponent
                onClick={goToSearch}
                buttonType={BUTTON_TYPE_CLASSES.back}
                type="button"
              >
                <img
                  src={plus}
                  className="plus"
                  alt="plus button to weather clock"
                />{" "}
              </ButtonComponent>
            </PlusButtonContainer>
          </div>
        </div>
      </div>
    </SelectorContainer>
  );
};

export default Selector;
