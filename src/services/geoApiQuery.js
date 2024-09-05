import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const geoApiOptions = {
  method: "GET",
  params: { limit: "8" },
  headers: {
    "X-RapidAPI-Key": "b2ae199e59mshee595fde5f388c8p1533bfjsn2065483af9bf", // enter your rapid api key here
    "X-RapidAPI-Host": "wft-geo-db.p.rapidapi.com",
  },
};

const geoApiHeaders = {
  "X-RapidAPI-Key": import.meta.env.VITE_APP_GEOAPI_TOKEN, // enter your rapid api key here
  "X-RapidAPI-Host": import.meta.env.VITE_APP_GEOAPI_API_URL,
};

const baseUrl = import.meta.env.VITE_APP_geoApi_API_URL;

const createRequest = (url) => ({ url, headers: geoApiHeaders });

export const geoApi = createApi({
  reducerPath: "geoApi",
  baseQuery: fetchBaseQuery({ baseUrl }),
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: () => createRequest(`/products?populate=*`),
    }),
  }),
});

export const { useGetProductsQuery } = geoApi;
