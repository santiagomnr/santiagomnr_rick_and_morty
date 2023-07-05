import { createStore, applyMiddleware, compose } from "redux"; 
import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools,  } from 'redux-devtools-extension';
import rootReducer from "./reducer";

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

const store = createStore(
  rootReducer,
  composeEnhancer(applyMiddleware(thunkMiddleware))
);

export default store;