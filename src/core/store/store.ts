import rootSaga from "./rootSaga";

import createSagaMiddleware from "redux-saga";
import { configureStore } from "@reduxjs/toolkit";
import tickerReducer from "@features/ticker/reducer";

const sagaMiddleware = createSagaMiddleware();

const store = configureStore({
  reducer: {
    tickerState: tickerReducer
  },
  middleware: [
    sagaMiddleware
  ]
});
sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>

export default store;
