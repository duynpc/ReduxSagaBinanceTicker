import { TickerData } from "../../core/entities/tickerData";

export function fetchTickerData(): Promise<TickerData[]> {  
  return fetch("https://api2.binance.com/api/v3/ticker/24hr")
    .then(response => response.json());
}