import { useEffect, useState } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  get5DaysForecast,
  getCityData,
} from "../../store/weather/weather.reducer";

import { BackArrow, BreadcrumbNav, SearchBar } from "../../components";

import { SearchContainer } from "./CitySearch.styles";

const CitySearch = () => {
  const headerTitle = "Page 2: City Search";

  // redux state
  const { citySearchLoading, forecastLoading } = useSelector(
    (state) => state.weather
  );

  // main loadings state
  const [loadings, setLoadings] = useState(true);

  // check if any of redux loading state is still true
  const allLoadings = [citySearchLoading, forecastLoading];
  useEffect(() => {
    const isAnyChildLoading = allLoadings.some((state) => state);
    setLoadings(isAnyChildLoading);
  }, [allLoadings]);

  // city state
  // const city = useSelector(selectCity);
  const [city, setCity] = useState("Budapest");

  // unit state
  const [unit, setUnit] = useState("metric"); // metric = C and imperial = F

  // dispatch
  const dispatch = useDispatch();

  // fetch data
  const fetchData = () => {
    dispatch(
      getCityData({
        city,
        unit,
      })
    ).then((res) => {
      if (!res.payload.error) {
        dispatch(
          get5DaysForecast({
            lat: res.payload.data.coord.lat,
            lon: res.payload.data.coord.lon,
            unit,
          })
        );
      }
    });
  };

  // initial render
  useEffect(() => {
    fetchData();
  }, [unit]);

  return (
    <>
      <BreadcrumbNav headerTitle={headerTitle} />

      <SearchContainer>
        <div className="background">
          <div className="box">
            {/* current weather details box */}
            <div className="current-weather-details-box">
              <BackArrow />
              {/* city search form */}
              <SearchBar />
            </div>
          </div>
        </div>
      </SearchContainer>
    </>
  );
};

export default CitySearch;
