import { apiFetcher } from "@/lib/fetcher";
import { WeatherResponse } from "@/types/weather";

export async function getWeather(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  return apiFetcher<WeatherResponse>(
    `/v1/weather?lat=${lat}&lon=${lon}`
  );
}

export async function getForecast(
  lat: number,
  lon: number
): Promise<WeatherResponse> {
  return apiFetcher<WeatherResponse>(
    `/v1/forecast?lat=${lat}&lon=${lon}`
  );
}