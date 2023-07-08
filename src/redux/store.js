import { createStore, applyMiddleware } from "redux"; 
import thunk from "redux-thunk";
import { composeWithDevTools  } from 'redux-devtools-extension';
import reducer from "./reducer";

const store = createStore(
    reducer,
    composeWithDevTools(applyMiddleware(thunk))
);

export default store;










// import { createStore, applyMiddleware, compose } from "redux"; 
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools,  } from 'redux-devtools-extension';




























// import { createStore, applyMiddleware, compose } from "redux"; 
// import thunkMiddleware from "redux-thunk";
// import { composeWithDevTools,  } from 'redux-devtools-extension';
// import rootReducer from "./reducer";

// const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE || compose;

// const store = createStore(
//   rootReducer,
//   composeEnhancer(applyMiddleware(thunkMiddleware))
// );

// export default store;