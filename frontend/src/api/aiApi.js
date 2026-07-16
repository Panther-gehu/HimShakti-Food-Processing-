const API_URL = "http://127.0.0.1:8000";

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

  return await response.json();
};