export default function AnalyzePage() {
    return (
      <main className="p-10 bg-green-50 min-h-screen">
  
        <h1 className="text-4xl font-bold text-green-700 mb-8">
          Farm                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                      Analysis
        </h1>
  
        <div className="bg-white p-8 rounded-lg shadow">
  
          <input
            type="file"
            className="mb-6"
          />
  
          <button className="px-6 py-3 bg-green-600 text-white rounded-lg">
            Analyze Farm Image
          </button>
  
        </div>
  
        <div className="mt-10 bg-white p-6 rounded-lg shadow">
  
          <h2 className="font-bold text-xl mb-4">
            Analysis Result
          </h2>
  
          <p>Total Trees: 84</p>
  
          <p>Healthy Trees: 68</p>
  
          <p>Needs Care: 12</p>
  
          <p>Needs Replacement: 4</p>
  
        </div>
  
      </main>
    );
  }