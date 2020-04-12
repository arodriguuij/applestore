import { combineReducers } from "redux";
import collectionsReducer from "./collections/collections.reducer";
import homePageCollectionsReducer from "./homePageCollections/homePageCollections.reducer";
import actualDeviceReducer from "./actualDevice/actual-device.reducer";
import collectionNamesReducer from "./collectionNames/collection-names.reducer";
import breadcrumbReducer from "./breadcrumb/breadcrumb.reducer";
import checkoutReducer from "./checkout/checkout.reducer";
import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';

const persistConfig = {
  key: 'root',
  storage,
  whitelist: ['checkout']
};

const rootReducer = combineReducers({
  collections: collectionsReducer,
  homePageCollections: homePageCollectionsReducer,
  actualDevice: actualDeviceReducer,
  collectionNames: collectionNamesReducer,
  checkout: checkoutReducer,
  breadcrumb: breadcrumbReducer
});
export default persistReducer(persistConfig, rootReducer);