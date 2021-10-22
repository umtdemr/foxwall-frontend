import { applyMiddleware, createStore } from "@reduxjs/toolkit"
import logger from "redux-logger"
import { persistStore } from "redux-persist";

import rootReducerWithPersistor from "./root-reducer"



const middlewares = [logger];



export const store = createStore(
  rootReducerWithPersistor,
  applyMiddleware(...middlewares)
);

export const persistor = persistStore(store);


export type RootSate = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
