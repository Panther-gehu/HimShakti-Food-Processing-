const API_URL = "https://himshakti-food-processing.onrender.com";

export const generateProductDescription = async (data) => {
  const response = await fetch(
    `${API_URL}/api/ai/generate-description`,
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }
  );

  if (!response.ok) {
    throw new Error("Failed to generate AI description");
  }

  return await response.json();
};
