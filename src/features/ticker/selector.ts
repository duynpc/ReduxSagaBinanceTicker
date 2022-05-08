import { createSelector } from "@reduxjs/toolkit";
import { RootState } from "@store/store";
import { TickerState } from "./state";

const selectTickerDataState = (state: RootState) => state.tickerState

export const selectAllTicker = createSelector(selectTickerDataState, tickerState => tickerState.tickerData);

export const selectTickerByName = createSelector([
  selectTickerDataState,
  (_state: TickerState, tickerName: string) => tickerName,
], (tickerState, tickerName) => tickerState.tickerData.filter(ticker => ticker.symbol === tickerName));

export const selectTickerUpdateDelay = createSelector(
    selectTickerDataState, 
    tickerState => tickerState.tickerUpdateDelay
);