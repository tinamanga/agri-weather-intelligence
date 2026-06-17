import { useEffect, useState } from "react";
import { getMockWeather } from "@/services/mockWeatherApi";
import { WeatherData } from "@/types/mockWeather";

export function useWeather() {
  const [weather, setWeather] =
    useState<WeatherData | null>(null);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchWeather() {
      const data = await getMockWeather();

      setWeather(data as WeatherData);

      setLoading(false);
    }

    fetchWeather();
  }, []);

  return { weather, loading };
}