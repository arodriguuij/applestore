import { combineReducers, applyMiddleware } from "redux";
import shopReducer from "./shop/shop.reducer";
import { createStore } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

const rootReducer = combineReducers({
  shop: shopReducer
});

const store = createStore(rootReducer, applyMiddleware(...middlewares));

export default store;
