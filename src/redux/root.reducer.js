import { combineReducers, applyMiddleware } from "redux";
import collectionsReducer from "./collections/collections.reducer";
import homePageCollectionsReducer from "./homePageCollections/homePageCollections.reducer";
import actualDeviceReducer from "./actualDevice/actual-device.reducer";
import collectionNamesReducer from "./collectionNames/collection-names.reducer";
import breadcrumbReducer from "./breadcrumb/breadcrumb.reducer";
import checkoutReducer from "./checkout/checkout.reducer";
import { createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const rootReducer = combineReducers({
  collections: collectionsReducer,
  homePageCollections: homePageCollectionsReducer,
  actualDevice: actualDeviceReducer,
  collectionNames: collectionNamesReducer,
  checkout: checkoutReducer,
  breadcrumb: breadcrumbReducer,
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
