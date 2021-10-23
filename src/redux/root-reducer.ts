import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"

import layout from "./slices/layout";


const persistConfig = {
  key: 'root',
  storage,
  whitelist: [] // this shuld be null for now
}


const rootReducer = combineReducers({
  layout,
});

export default persistReducer(
  persistConfig,
  rootReducer
)
