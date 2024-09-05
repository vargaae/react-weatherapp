import { createSlice } from "@reduxjs/toolkit";

const addCityItem = (cityItems, selectedCityToAdd) => {
  return [...cityItems, { ...selectedCityToAdd }];
};

const CITY_INITIAL_STATE = {
  cityItems: [],
};

export const citySlice = createSlice({
  name: "city",
  initialState: CITY_INITIAL_STATE,
  reducers: {
    addItemToSlice(state, action) {
      state.cityItems = addCityItem(state.cityItems, action.payload);
    },
    resetSlice: (state) => {
      state.cityItems = [];
    },
  },
});

export const { addItemToSlice, resetSlice } = citySlice.actions;

export const cityReducer = citySlice.reducer;
