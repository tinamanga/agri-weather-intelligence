export interface WeatherResponse {
    temperature: number;
    humidity: number;
    wind_speed: number;
    condition: string;
    forecast?: ForecastDay[];
    ai_summary?: string;
  }
  
  export interface ForecastDay {
    date: string;
    temperature: number;
    precipitation: number;
  }