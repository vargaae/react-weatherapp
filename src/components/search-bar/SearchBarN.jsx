import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import { AsyncPaginate } from "react-select-async-paginate";
import {
  WEATHER_API_URL,
  WEATHER_API_KEY,
  geoApiOptions,
  GEO_API_URL,
} from "../../services/geoApi";

import ButtonComponent, {
  BUTTON_TYPE_CLASSES,
} from "../button-component/ButtonComponent";

import { addItemToSlice } from "../../store/city/city.reducer";
import { useDispatch } from "react-redux";
import { ButtonContainer, SearchFormContainer } from "./SearchBar.styles";

const SearchBar = () => {
  const [search, setSearch] = useState(null);

  const handleOnSearchChange = (searchData) => {
    // const [lat, lon] = searchData.value.split(" ");
    // const currentWeatherFetch = fetch(
    //   `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );
    // const forecastFetch = fetch(
    //   `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    // );
    // Promise.all([currentWeatherFetch, forecastFetch])
    //   .then(async (response) => {
    //     const weatherResponse = await response[0].json();
    //     const forcastResponse = await response[1].json();
    //     setCurrentWeather({ city: searchData.label, ...weatherResponse });
    //     setForecast({ city: searchData.label, ...forcastResponse });
    //   })
    //   .catch(console.log);
  };

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&limit=8`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        return {
          options: response.data.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}, ${city.countryCode}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    handleOnSearchChange(searchData);
  };

  return (
    <SearchFormContainer>
      <AsyncPaginate
        // options={initialOptions}
        placeholder="Search for city"
        debounceTimeout={600}
        value={search}
        onChange={handleOnChange}
      />
    </SearchFormContainer>
  );
};

export default SearchBar;
