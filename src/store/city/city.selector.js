import { createSelector } from "reselect";

const selectCityReducer = (state) => state.city;

export const selectCityItems = createSelector(
  [selectCityReducer],
  (city) => city.cityItems
);
