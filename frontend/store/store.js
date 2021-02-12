import { createStore, applyMiddleware } from "redux";
import logger from "redux-logger";
import thunk from "redux-thunk";
import rootReducer from "../reducers/root_reducer";
import { composeWithDevTools } from 'redux-devtools-extension';

const configureStore = (preloadedState = {}) => {
  //return createStore(rootReducer, preloadedState, applyMiddleware(thunk, logger));
  return createStore(rootReducer, preloadedState, 
    composeWithDevTools(applyMiddleware(thunk))
    );
};

export default configureStore;