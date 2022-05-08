import { TickerData } from "@entities/tickerData";
import { all, put, takeLatest } from "redux-saga/effects";
import { tickerRequest, tickerResponse } from "./action";
import { fetchTickerData } from "./api";

export function* getTickerDataSaga() {
  const response: TickerData[] = yield fetchTickerData();
  yield put(tickerResponse(response));
}

export function* tickerWatcher() {
  yield all([
    takeLatest(tickerRequest, getTickerDataSaga),
  ]);
}
