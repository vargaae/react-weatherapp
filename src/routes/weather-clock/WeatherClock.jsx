/* eslint-disable react-hooks/exhaustive-deps */
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCityData } from "../../store/weather/weather.reducer";
import { selectCityItems } from "../../store/city/city.selector";

import { BreadcrumbNav, BackArrow } from "../../components";
import TimeAndLocation from "./TimeAndLocation";

import moment from "moment";

import Icon from "react-icons-kit";
import { sunrise } from "react-icons-kit/feather/sunrise";
import { sunset } from "react-icons-kit/feather/sunset";
import { thermometer } from "react-icons-kit/feather/thermometer";
import { SphereSpinner } from "react-spinners-kit";

import { WeatherContainer } from "./WeatherClock.styles";

function WeatherCurrent() {
  const headerTitle = "Page 3: WeatherClock";
  const unit = "metric"; // metric = C and imperial = F
  // redux state
  const { citySearchLoading, citySearchData } = useSelector(
    (state) => state.weather
  );
  const cityItems = useSelector(selectCityItems);

  // main loadings state
  const [loadings, setLoadings] = useState(true);

  // check if any of redux loading state is still true
  const allLoadings = [citySearchLoading];

  useEffect(() => {
    const isAnyChildLoading = allLoadings.some((state) => state);
    setLoadings(isAnyChildLoading);
  }, [allLoadings]);

  // dispatch saved last saved city in Celsius(metric unit)
  const dispatch = useDispatch();
  // fetch data
  const fetchData = () => {
    let city = cityItems[cityItems.length - 1].name;

    dispatch(
      getCityData({
        city,
        unit,
      })
    );
  };

  // initial render
  useEffect(() => {
    fetchData();
  }, [unit]);

  return (
    <WeatherContainer>
      <BreadcrumbNav headerTitle={headerTitle} />
      <div className="background">
        <div className="box">
          <div className="current-weather-details-box">
            <BackArrow />
            <TimeAndLocation />
            {loadings ? (
              <div className="loader">
                <SphereSpinner loadings={loadings} color="#2fa5ed" size={20} />
              </div>
            ) : (
              <>
                {citySearchData && citySearchData.error ? (
                  <div className="error-msg">{citySearchData.error}</div>
                ) : (
                  <>
                    {citySearchData && citySearchData.data ? (
                      <div className="weather-details-container">
                        <div className="details">
                          <h3 className="city-name">
                            {cityItems != 0
                              ? cityItems[cityItems.length - 1].name
                              : Budapest}
                          </h3>

                          <div className="icon-and-temp">
                            <img
                              className="m-auto"
                              src={`https://openweathermap.org/img/wn/${citySearchData.data.weather[0].icon}@2x.png`}
                              alt="icon"
                            />
                          </div>

                          <h4 className="description">
                            {citySearchData.data.weather[0].description}
                          </h4>
                        </div>
                        <div className="metrices">
                          {/* Temprature */}
                          <div className="key-value-box">
                            <div className="key">
                              <Icon
                                icon={thermometer}
                                size={20}
                                className="icon"
                              />
                              <span className="value">
                                {Math.round(citySearchData.data.main.temp)}
                                °C
                              </span>
                            </div>
                          </div>
                          {/* Sunrise */}
                          <div className="key-value-box">
                            <div className="key">
                              <Icon icon={sunrise} size={20} className="icon" />
                              <span className="value">
                                {citySearchData?.data.sys.sunrise &&
                                  moment
                                    .unix(citySearchData.data.sys.sunrise)
                                    .format("HH:mm")}
                              </span>
                            </div>
                          </div>
                          {/* Sunset */}
                          <div className="key-value-box">
                            <div className="key">
                              <Icon icon={sunset} size={20} className="icon" />
                            </div>
                            <div className="value">
                              <span>
                                {citySearchData?.data.sys.sunset &&
                                  moment
                                    .unix(citySearchData.data.sys.sunset)
                                    .format("HH:mm")}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    ) : (
                      <div className="error-msg">No Data Found</div>
                    )}
                  </>
                )}
              </>
            )}
          </div>
        </div>
      </div>
    </WeatherContainer>
  );
}

export default WeatherCurrent;
