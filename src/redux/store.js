import { applyMiddleware, createStore } from "redux";
import rootReducer from './root.reducer';
import { persistStore } from "redux-persist";
import logger from "redux-logger";
import thunk from "redux-thunk";

const middlewares = [thunk];

if (process.env.NODE_ENV === "development") middlewares.push(logger);

export const store = createStore(rootReducer, applyMiddleware(...middlewares));

export const persistor = persistStore(store);