import { createReducer } from "@reduxjs/toolkit";
import { tickerResponse, tickerUpdateRateChange } from "./action";
import { initialTickerState } from "./state";

const tickerReducer = createReducer(initialTickerState, (builder) => {
  builder
    .addCase(tickerResponse, (state, action) => {      
      console.log("new ticker data");
      
      state.tickerData = action.payload;
    })
    .addCase(tickerUpdateRateChange, (state, action) => {      
      state.tickerUpdateDelay = action.payload;
    })
    .addDefaultCase((state) => {
      return state;
    })
});

export default tickerReducer;