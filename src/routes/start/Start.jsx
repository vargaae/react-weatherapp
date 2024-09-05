import { useNavigate } from "react-router-dom";

import {
  BUTTON_TYPE_CLASSES,
  ButtonComponent,
  StartHeader,
} from "../../components";

import { StartContainer, StartTitle, ButtonContainer } from "./Start.styles";
import { addItemToSlice } from "../../store/city/city.reducer";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { selectCityItems } from "../../store/city/city.selector";

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
          id: 1234,
        })
      );
    };

    if (cityItems.name == undefined) {
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
      <StartContainer>
        <StartTitle>DOCUMENTATION</StartTitle>
        <h2>Bene Studio - React Weather App Assesment</h2>
        <p>
          🚀Design First: Preparation of basic design according to functions,
          then construction of the logic
        </p>
        <p>🚀Navigation between the three pages</p>
        <p>🚀Setup Features:</p>
        <p>🚀🚀🚀Page1-Selected cities are stored in Redux -array in store?</p>
        <p>🚀🚀🚀WEATHER-CLOCK !24h format running clock!</p>
        <p>
          {" "}
          - DATA from API - API doc: openweathermap.org/current, screenshots
        </p>
        <p>
          🚀🚀🚀Clock(HH:MM), Sunrise, Sunset, dt, temperature, weather
          icons+description
        </p>
        <p>🚀🚀Current weather(temperature): using openweathermap API</p>
        <p>
          🚀🚀using weather icons https://openweathermap.org/img/wn/
          ...data.weather[0].icon@2x.png
        </p>
        <p>🚀🚀🚀SEARCH - autocomplete field - letters color?</p>
        <p>🚀 PAGE 2</p>

        <p>✔ Top left arrow redirect to page 1</p>
        <p>✔ The page has only 1 autocomplete field</p>
        <p>✔ You can search capitals by name</p>
        <p>
          // Figure out how to feed the autocomplete field // Highlight the
          result (max 8 items) // capitals already added to the list should be
          hidden in the search field
        </p>
        <p>
          ✔ Selected one can be saved with SAVE button and redirects to page 1
        </p>
        <p>✔ Save button is only visible when city is selected</p>
        <p>🚀PAGE 3</p>
        <p>// Selected city name</p>
        <p>✔ -24h format running clock</p>
        <p>
          ✔ -using openweathermap API -using weather icons -show temperature
        </p>
        <p>
          ✔ show sunset, sunrise times (const getSunrise =
          moment.unix(citySearchData.data.sys.sunrise).format("hh:MM")
        </p>
        <p>✔ back arrow to Page 1</p>
        <p>🚀Dependencies: momentjs, tailwindcss, icons...</p>
      </StartContainer>
    </>
  );
};

export default Start;
