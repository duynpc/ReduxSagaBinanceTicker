import { tickerWatcher } from "@features/ticker/saga";
import { all } from 'redux-saga/effects';

export default function* rootSaga() {
  yield all([tickerWatcher()]);
}
