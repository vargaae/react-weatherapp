import { configureStore } from "@reduxjs/toolkit";

import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from "redux-persist";
import storage from "redux-persist/lib/storage";

import { setupListeners } from "@reduxjs/toolkit/query";

import logger from "redux-logger";

import { rootReducer } from "./root-reducer";
// import { geoApi } from "../services/geoApi";

const middleWares = [
  import.meta.env.NODE_ENV === "development" && logger,
].filter(Boolean);

const persistConfig = {
  key: "root",
  version: 1,
  storage,
  // blacklist: [geoApi.reducerPath],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
  // [geoApi.reducerPath]: geoApi.reducer,
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    }).concat(middleWares),
  // }).concat(geoApi.middleware, middleWares),
});

export let persistor = persistStore(store);
// optional, but required for refetchOnFocus/refetchOnReconnect behaviors
// see `setupListeners` docs - takes an optional callback as the 2nd arg for customization
setupListeners(store.dispatch);
