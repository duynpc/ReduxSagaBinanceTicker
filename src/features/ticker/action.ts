import { TickerData } from "@entities/tickerData";
import { createAction } from "@reduxjs/toolkit";

export enum TickerActionTypes {
  TICKER_DATA_REQUEST = "TICKER_DATA_REQUEST",
  TICKER_DATA_RESPONSE = 'TICKER_DATA_RESPONSE',
  TICKER_UPDATE_RATE_CHANGE = "TICKER_UPDATE_RATE_CHANGE"
}

export const tickerResponse = createAction<TickerData[], TickerActionTypes.TICKER_DATA_RESPONSE>(TickerActionTypes.TICKER_DATA_RESPONSE);
export const tickerRequest = createAction(TickerActionTypes.TICKER_DATA_REQUEST);
export const tickerUpdateRateChange = createAction<number, TickerActionTypes.TICKER_UPDATE_RATE_CHANGE>(TickerActionTypes.TICKER_UPDATE_RATE_CHANGE);