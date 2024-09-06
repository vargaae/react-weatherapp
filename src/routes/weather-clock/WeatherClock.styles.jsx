import styled from "styled-components";

export const WeatherContainer = styled.div`
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Roboto", sans-serif;
  letter-spacing: 0.04em;

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

@media (max-width: 768px) {
  .background .box {
    width: 100%;
  }
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

.details-box-header h4 {
  color: var(--color-prime);
}

.loader {
  margin-top: 15px;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 15px;
}

.error-msg {
  width: 100%;
  background-color: #f8d7da;
  font-size: 12px;
  color: #721c24;
  border-color: #f5c6cb;
  padding: 0.75rem 1.25rem;
  margin-top: 1rem;
  border: 1px solid transparent;
  border-radius: 0.25rem;
}

.current-weather-details-box .weather-details-container {
  width: 100%;
  margin-top: 15px;
  padding: 15px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.weather-details-container .details,
.weather-details-container .metrices {
  flex: 1;
}

.weather-details-container .details .city-name {
  color: lightblue;
  font-size: 1.2rem;
  font-weight: 600;
}

.weather-details-container .details .icon-and-temp {
  display: flex;
  align-items: center;
}

.icon-and-temp h1 {
  color: var(--color-text);
  font-size: 56px;
}

.icon-and-temp img {
  /* filter: invert(100%); */
  text-align: center;
}

.weather-details-container .details .description {
  color: var(--color-prime);
}

.metrices {
  text-align: left;
}

.weather-details-container .metrices .key-value-box {
  width: 100%;
  display: flex;
  margin-top: 15px;
}

.key-value-box .key,
.key-value-box .value {
  flex: 1;
}

.key .icon {
  color: var(--color-prime);
}

.key .value {
  color: var(--color-text);
}

.key span {
  color: var(--color-prime);
  margin-left: 15px;
}

.value span {
  color: var(--color-text);
}

.forecast-box .min-max-temp {
  margin-top: 5px;
  font-weight: 500;
}
`;
