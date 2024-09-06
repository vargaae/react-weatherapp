import { combineReducers } from "@reduxjs/toolkit";

import { cityReducer } from "./city/city.reducer";
import weatherReducer from "./weather/weather.reducer";

export const rootReducer = combineReducers({
  city: cityReducer,
  weather: weatherReducer,
});
