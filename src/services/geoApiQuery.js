import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const geoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_GEOAPI_TOKEN,
  "X-RapidAPI-Host": import.meta.env.VITE_APP_GEOAPI_API_URL,
};

const baseUrl = import.meta.env.VITE_APP_geoApi_API_URL;

const createRequest = (url) => ({ url, headers: geoApiHeaders });

export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getCities: builder.query({
      query: (inputValue) =>
        createRequest(
          `/cities?minPopulation=1000000&namePrefix=${inputValue}&limit=8`
        ),
    }),
  }),
});

export const { useGetCitiesQuery } = geoApi;
