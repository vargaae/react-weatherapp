import { createSelector } from "reselect";

const selectCityReducer = (state) => state.city;

export const selectIsCityOpen = createSelector(
  [selectCityReducer],
  (city) => city.isCityOpen
);

export const selectIsComponentVisible = createSelector(
  [selectCityReducer],
  (city) => city.isComponentVisible
);

export const selectCityItems = createSelector(
  [selectCityReducer],
  (city) => city.cityItems
);

export const selectCityTotalPriceCount = createSelector(
  [selectCityItems],
  (cityItems) =>
    cityItems.reduce(
      (total, cityItem) => total + cityItem.quantity * cityItem.price,
      0
    )
);

export const selectCityCount = createSelector([selectCityItems], (cityItems) =>
  cityItems.reduce((total, cityItem) => total + cityItem.quantity, 0)
);
