import { configureStore } from "@reduxjs/toolkit";
import logger from "redux-logger";
import thunk from "redux-thunk";
import { persistStore } from "redux-persist";

import rootReducerWithPersistor from "./root-reducer";

const middlewares = [thunk, logger];

export const store = configureStore({
  reducer: rootReducerWithPersistor,
  devTools: true,
  middleware: middlewares,
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
