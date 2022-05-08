import { expectSaga, testSaga } from "redux-saga-test-plan";
import * as api from "@features/ticker/api";
import { getTickerDataSaga } from "@features/ticker/saga";
import { tickerResponse } from "@features/ticker/action";

it("should putTickerData Response", () => {
  jest.spyOn(api, "fetchTickerData").mockResolvedValue([]);

  testSaga(getTickerDataSaga) // bug of redux-saga-testing-plan, see https://github.com/jfairbank/redux-saga-test-plan/issues/378
    .next()
    .next([])
    .put(tickerResponse([]))
    .next()
    .isDone()
})