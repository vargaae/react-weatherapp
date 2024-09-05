import { combineReducers } from "@reduxjs/toolkit";

// import { geoApi } from "../services/geoApi";

import { cityReducer } from "./city/city.reducer";
import weatherReducer from "./weather/weather.reducer";

export const rootReducer = combineReducers({
  // [geoApi.reducerPath]: geoApi.reducer,
  city: cityReducer,
  weather: weatherReducer,
});
