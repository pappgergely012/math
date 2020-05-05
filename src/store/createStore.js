import { createStore, combineReducers, compose, applyMiddleware } from 'redux';
import thunk from "redux-thunk";

import CurrentFormulaReducer from './reducers/CurrentFormulaReducer.js';
import CategoryReducer from './reducers/CategoryReducer';

const rootReducer = combineReducers({
  Categories: CategoryReducer,
  CurrentFormula: CurrentFormulaReducer,
})

let composeEnhancers = compose;

if (__DEV__) {
    composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
}

const configureStore = () => {
  return createStore(rootReducer, composeEnhancers(applyMiddleware(thunk)));
}

export default configureStore;