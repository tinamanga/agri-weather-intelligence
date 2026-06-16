import { ForecastDay } from "@/types/weather";

type Props = {
  forecast: ForecastDay[];
};

export default function ForecastCard({
  forecast,
}: Props) {
  return (
    <div className="border rounded-lg p-6 mt-6 shadow-md">

      <h2 className="text-2xl font-bold mb-4">
        Forecast
      </h2>

      {forecast?.map((day) => (
        <div
          key={day.date}
          className="mb-3"
        >
          <p>{day.date}</p>

          <p>{day.temperature}°C</p>

          <p>
            Rain: {day.precipitation}%
          </p>
        </div>
      ))}

    </div>
  );
}