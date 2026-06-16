export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center px-6 bg-green-50">
      <div className="max-w-3xl text-center">
        <h1 className="text-5xl font-bold text-green-700 mb-6">
          Agri Weather Intelligence
        </h1>

        <p className="text-lg text-gray-700 mb-8">
          AI-powered platform delivering real-time weather insights,
          crop monitoring, and smart agricultural decision support
          for farmers and agribusinesses.
        </p>

        <div className="flex justify-center gap-4">
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
            Check Weather
          </button>

          <button className="px-6 py-3 border border-green-600 text-green-700 rounded-lg hover:bg-green-100">
            Analyze Crops
          </button>
        </div>
      </div>
    </main>
  );
}