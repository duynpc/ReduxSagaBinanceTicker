import { tickerResponse, tickerUpdateRateChange } from "@features/ticker/action";
import tickerReducer from "@features/ticker/reducer";
import { initialTickerState } from "@features/ticker/state";
import { mockTickerData } from "__mocks__/tickerData.mock";

it("should update tickerData", () => {
  const mockData = [mockTickerData];
  const action = tickerResponse(mockData);
  const newState = tickerReducer({ ...initialTickerState }, action);

  expect(newState.tickerData).toEqual(mockData);
});

it("should update tickerUpdateRateChange", () => {
  const mockData = 100000;
  const action = tickerUpdateRateChange(mockData);
  const newState = tickerReducer({ ...initialTickerState }, action);

  expect(newState.tickerUpdateDelay).toEqual(mockData);
});