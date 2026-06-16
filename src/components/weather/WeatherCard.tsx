import { WeatherResponse } from "@/types/weather";

type Props = {
  weather: WeatherResponse;
};

export default function WeatherCard({
  weather,
}: Props) {
  return (
    <div className="border rounded-lg p-6 shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Current Weather
      </h2>

      <p>Temperature: {weather.temperature}°C</p>

      <p>Humidity: {weather.humidity}%</p>

      <p>Wind: {weather.wind_speed} km/h</p>

      <p>Condition: {weather.condition}</p>

    </div>
  );
}