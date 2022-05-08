import { TickerData } from "@entities/tickerData"

export interface TickerState {
  tickerData: TickerData[]
  tickerUpdateDelay: number
}

export const initialTickerState: TickerState = {
  tickerData: [],
  tickerUpdateDelay: 10000
}