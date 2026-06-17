"use client";

import { useWeather } from "@/hooks/useWeather";

export default function WeatherPage() {
  const { weather, loading } = useWeather();

  if (loading) {
    return (
      <main className="p-10 bg-green-50 min-h-screen">
        <div className="flex justify-center mt-20">
          <p className="text-green-700 text-xl">
            Loading weather data...
          </p>
        </div>
      </main>
    );
  }

  // extra safety check
  if (!weather) {
    return (
      <main className="p-10">
        <p>Unable to load weather data.</p>
      </main>
    );
  }

  return (
    <main className="p-10 bg-green-50 min-h-screen">

      <h1 className="text-4xl font-bold text-green-700 mb-2">
        Weather Insights
      </h1>

      <p className="text-gray-600 mb-8">
        Current weather conditions for Nairobi, Kenya
      </p>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-gray-600">
            Temperature
          </h2>

          <p className="text-3xl mt-2 font-semibold">
            {weather.temperature}°C
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-gray-600">
            Humidity
          </h2>

          <p className="text-3xl mt-2 font-semibold">
            {weather.humidity}%
          </p>
        </div>

        <div className="bg-white p-6 rounded-lg shadow">
          <h2 className="font-bold text-gray-600">
            Wind Speed
          </h2>

          <p className="text-3xl mt-2 font-semibold">
            {weather.windSpeed} km/h
          </p>
        </div>

      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow">

        <h2 className="font-bold text-xl mb-4 text-green-700">
          AI Recommendation
        </h2>

        <p className="text-gray-700 leading-7">
          {weather.recommendation}
        </p>

      </div>

    </main>
  );
}