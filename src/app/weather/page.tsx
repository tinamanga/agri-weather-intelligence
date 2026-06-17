export default function WeatherPage() {
    return (
      <main className="p-10 bg-green-50 min-h-screen">
  
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Weather Insights
        </h1>
  
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Temperature</h2>
            <p className="text-3xl mt-2">24°C</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Humidity</h2>
            <p className="text-3xl mt-2">78%</p>
          </div>
  
          <div className="bg-white p-6 rounded-lg shadow">
            <h2 className="font-bold">Wind Speed</h2>
            <p className="text-3xl mt-2">11 km/h</p>
          </div>
  
        </div>
  
        <div className="mt-10 bg-white p-6 rounded-lg shadow">
  
          <h2 className="font-bold text-xl mb-4">
            AI Recommendation
          </h2>
  
          <p>
            Rain expected in the next 24 hours.
            Delay fertilizer application.
          </p>
  
        </div>
  
      </main>
    );
  }