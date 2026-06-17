export default function FarmAnalysisPage() {
  return (
    <main className="p-10 bg-green-50 min-h-screen">

      <h1 className="text-4xl font-bold text-green-700 mb-8">
        Farm Analysis
      </h1>

      <div className="bg-white p-8 rounded-lg shadow">

        <p className="text-gray-600 mb-4">
          Upload a drone, satellite, or farm image for AI-powered tree and crop analysis.
        </p>

        <input
          type="file"
          className="mb-6 block w-full border p-3 rounded-lg"
        />

        <button className="px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700">
          Analyze Farm Image
        </button>

      </div>

      <div className="mt-10 bg-white p-6 rounded-lg shadow">

        <h2 className="font-bold text-xl mb-6">
          Analysis Result
        </h2>

        <div className="grid grid-cols-2 gap-4">

          <div>
            <p className="text-gray-500">Total Trees</p>
            <p className="text-2xl font-bold">84</p>
          </div>

          <div>
            <p className="text-gray-500">Healthy Trees</p>
            <p className="text-2xl font-bold">68</p>
          </div>

          <div>
            <p className="text-gray-500">Needs Care</p>
            <p className="text-2xl font-bold">12</p>
          </div>

          <div>
            <p className="text-gray-500">Needs Replacement</p>
            <p className="text-2xl font-bold">4</p>
          </div>

        </div>

      </div>

    </main>
  );
}