import { API_BASE_URL, API_KEY } from "@/utils/constants";
import { TreeAnalysisResponse } from "@/types/trees";

export async function analyzeTrees(
  formData: FormData
): Promise<TreeAnalysisResponse> {
  const response = await fetch(
    `${API_BASE_URL}/v1/trees/analyze`,
    {
      method: "POST",
      headers: {
        Authorization: `Bearer ${API_KEY}`,
      },
      body: formData,
    }
  );

  if (!response.ok) {
    throw new Error("Tree analysis failed");
  }

  return response.json();
}