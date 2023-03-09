import { createStore, applyMiddleware } from "redux";
import { configureStore } from '@reduxjs/toolkit'
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { createWrapper } from "next-redux-wrapper";
import rootReducer from "./reducers";
import logger from 'redux-logger'
// middleware
const middleware = [thunk];

export const store = configureStore({
    reducer: rootReducer, //add reducers here
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    //middleware: (getDefaultMiddleware) => getDefaultMiddleware({thunk: {extraArgument: myCustomApiService,},}).concat(logger),
  })

// // creating store
// export const store = createStore(
//   rootReducer,
//   composeWithDevTools(applyMiddleware(...middleware))
// );

// assigning store to next wrapper
const makeStore = () => store;

export const wrapper = createWrapper(makeStore);