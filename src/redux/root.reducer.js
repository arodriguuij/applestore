import { combineReducers, applyMiddleware } from "redux";
import collectionsReducer from "./collections/collections.reducer";
import devicesReducer from "./devicesMainPage/decives.reducer";
import actualDeviceReducer from "./actualDevice/actual-device.reducer";
import collectionNamesReducer from './collectionNames/collection-names.reducer';

import { createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const rootReducer = combineReducers({
  collections: collectionsReducer,
  devices: devicesReducer,
  actualDevice: actualDeviceReducer,
  collectionNames: collectionNamesReducer
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
