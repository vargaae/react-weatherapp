import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { addItemToSlice } from "../../store/city/city.reducer";
import { selectCityItems } from "../../store/city/city.selector";

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

import { ButtonContainer, SearchFormContainer } from "./SearchBar.styles";

const SearchBar = () => {
  const navigateTo = useNavigate();

  const [search, setSearch] = useState(null);

  const [currentWeather, setCurrentWeather] = useState(null);

  const handleOnSearchChange = (searchData) => {
    const [lat, lon] = searchData.value.split(" ");

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch])
      .then(async (response) => {
        const weatherResponse = await response[0].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
      })
      .catch(console.log);
  };

  // Get City Slice for filtering
  const savedCities = useSelector(selectCityItems);
  // Extract all IDs and assign them to excludeSavedCityIds
  const excludeSavedCityNames = savedCities.map((city) => city.name);

  const loadOptions = (inputValue) => {
    return fetch(
      `${GEO_API_URL}/cities?minPopulation=1000000&namePrefix=${inputValue}&limit=8`,
      geoApiOptions
    )
      .then((response) => response.json())
      .then((response) => {
        // List of city IDs to exclude
        // const excludedDuplicatedCityIds = [3850494, 11111111111111111111];
        // Filter out cities whose id is in the excluded list
        const filteredCities = response.data
          .slice()
          .filter(
            (city) =>
              !excludeSavedCityNames.includes(city.name) &&
              !excludedDuplicatedCityIds.includes(city.id)
          );

        return {
          options: filteredCities.map((city) => {
            return {
              value: `${city.latitude} ${city.longitude}`,
              label: `${city.name}`,
            };
          }),
        };
      });
  };

  const handleOnChange = (searchData) => {
    setSearch(searchData);
    handleOnSearchChange(searchData);
  };
  // dispatch saved cities' name and ID
  const dispatch = useDispatch();
  const addCityToSlice = () => {
    dispatch(
      addItemToSlice({
        name: currentWeather?.city,
        id: currentWeather?.id,
      })
    );
    navigateTo("/selector");
  };

  return (
    <SearchFormContainer>
      <AsyncPaginate
        debounceTimeout={600}
        loadOptions={loadOptions}
        placeholder="Search for city"
        value={search}
        onChange={handleOnChange}
      />
      {currentWeather && (
        <ButtonContainer>
          <ButtonComponent
            buttonType={BUTTON_TYPE_CLASSES.back}
            onClick={addCityToSlice}
          >
            Save
          </ButtonComponent>
        </ButtonContainer>
      )}
    </SearchFormContainer>
  );
};

export default SearchBar;
