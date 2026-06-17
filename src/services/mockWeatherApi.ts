export async function getMockWeather() {
    
    // simulating network delaying
    return new Promise((resolve) => {
      setTimeout(() => {
        resolve({
          temperature: 24,
          humidity: 78,
          windSpeed: 11,
          recommendation:
            "Rain expected within 24 hours. Delay fertilizer application.",
        });
      }, 1000);
    });
  }