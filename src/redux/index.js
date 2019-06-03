import { combineReducers, createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";
import demo from "./demo/reducer";

/**
 * Root Reducer
 * where you combine all reducer as single object called redux state
 */
const rootReducer = combineReducers({
  demo
});

/**
 * composeEnhancers
 * enhancer for redux dev tools (only in development mode)
 */
let composeEnhancers = compose;

if (process.env.NODE_ENV === "development") {
  composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

export default () =>
  createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
