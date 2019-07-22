    
import { applyMiddleware, compose, createStore, combineReducers } from 'redux';
import { LOCATION_CHANGE } from 'react-router-redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
//import gtag from "../ga/initializeGoogleAnalytics";
import saveState from "./utils/saveState";
//import loadState from "./utils/loadState";

import {
  LOGIN_ACTION,
  LOGOUT_ACTION,
  ERROR,
  CLEAR_ERROR
} from "./actions/types";

const initialState = {
  showError: false,
  user: false
};

function analytics_reducer(state = initialState, action) {
  switch (action.type) {
    case LOGIN_ACTION:
      return Object.assign({}, { user: action.user });
    case LOGOUT_ACTION:
      return Object.assign({}, { user: false });
    case ERROR:
      return Object.assign({}, state, { showError: action.error });
    case CLEAR_ERROR:
      return Object.assign({}, state, { showError: false });
    case LOCATION_CHANGE:
      if (state.user)
        console.log("Pageview should be logged as there is a location change!");
      else
        return Object.assign({}, state);
      break;
    default:
      return state;
  }
}

function createRootReducer(history) {
  return(
    combineReducers({
      router: connectRouter(history),
      analytics: analytics_reducer
    })
  );
}

export const history = createBrowserHistory();

const store = createStore(
  createRootReducer(history),
  compose(
    applyMiddleware(
      routerMiddleware(history)
    )
  )
);

store.subscribe(() => {
  saveState(store.getState());
});

export default store;