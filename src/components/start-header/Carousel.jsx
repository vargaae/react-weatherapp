/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import {
  get5DaysForecast,
  getCityData,
} from "./../../store/weather/weather.reducer";

import AliceCarousel from "react-alice-carousel";
import "react-alice-carousel/lib/alice-carousel.css";

import { CarouselContainer, CarouselItem } from "./Carousel.styles";

const demoImage =
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQlt94EjayRbU_oim_ZJzHHODBNDhCDQzaUIw&usqp=CAU";

const Carousel = () => {
  const responsive = {
    0: { items: 3 },
    512: { items: 4 },
    1024: { items: 6 },
    1200: { items: 8 },
  };

  // redux state
  const {
    citySearchLoading,
    citySearchData,
    forecastLoading,
    forecastData,
    forecastError,
  } = useSelector((state) => state.weather);

  // main loadings state
  const [loadings, setLoadings] = useState(true);

  // check if any of redux loading state is still true
  const allLoadings = [citySearchLoading, forecastLoading];
  useEffect(() => {
    const isAnyChildLoading = allLoadings.some((state) => state);
    setLoadings(isAnyChildLoading);
  }, [allLoadings]);

  // city state
  const [city, setCity] = useState("Karachi");

  // unit state
  const [unit, setUnit] = useState("metric"); // metric = C and imperial = F

  // toggle unit
  const toggleUnit = () => {
    setLoadings(true);
    setUnit(unit === "metric" ? "imperial" : "metric");
  };

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

  // handle city search
  const handleCitySearch = (e) => {
    e.preventDefault();
    setLoadings(true);
    fetchData();
  };

  // function to filter forecast data based on the time of the first object
  const filterForecastByFirstObjTime = (forecastData) => {
    if (!forecastData) {
      return [];
    }

    const firstObjTime = forecastData[0].dt_txt.split(" ")[1];
    return forecastData.filter((data) => data.dt_txt.endsWith(firstObjTime));
  };

  const filteredForecast = filterForecastByFirstObjTime(forecastData?.list);

  const items = filteredForecast.map((data, index) => {
    const date = new Date(data.dt_txt);
    const day = date.toLocaleDateString("en-US", {
      weekday: "short",
    });
    return (
      <CarouselItem className="forecast-box" key={index}>
        <h5>{day}</h5>
        <img
          src={`https://openweathermap.org/img/wn/${data.weather[0].icon}.png`}
          alt="icon"
        />
        <h5>{data.weather[0].description}</h5>
        <h5 className="min-max-temp">
          {Math.round(data.main.temp_max)}°C / {Math.round(data.main.temp_min)}
          °C
        </h5>
      </CarouselItem>
    );
  });

  return (
    <CarouselContainer>
      <AliceCarousel
        mouseTracking
        items={items}
        responsive={responsive}
        controlsStrategy="alternate"
        autoPlay
        autoPlayStrategy="none"
        autoPlayInterval={5000}
        animationDuration={1500}
        animationType="fadeout"
        infinite
        disableButtonsControls
      />
    </CarouselContainer>
  );
};

export default Carousel;
