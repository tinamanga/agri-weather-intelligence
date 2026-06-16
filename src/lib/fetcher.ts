import { API_BASE_URL, API_KEY } from "@/utils/constants";

export async function apiFetcher<T>(endpoint: string): Promise<T> {
  const response = await fetch(`${API_BASE_URL}${endpoint}`, {
    headers: {
      Authorization: `Bearer ${API_KEY}`,
      "Content-Type": "application/json",
    },
  });

  if (!response.ok) {
    switch (response.status) {
      case 401:
        throw new Error("Unauthorized API key");
      case 403:
        throw new Error("Forbidden request");
      case 429:
        throw new Error("Rate limit exceeded");
      case 500:
        throw new Error("Internal server error");
      default:
        throw new Error("Something went wrong");
    }
  }

  return response.json();
}