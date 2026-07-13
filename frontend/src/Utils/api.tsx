const API_URL = import.meta.env.VITE_API_URL;

export const apiFetch = async (endpoint: string) => {
  if (!API_URL) {
    throw new Error("VITE_API_URL is not configured");
  }

  const res = await fetch(`${API_URL}/api${endpoint}`);

  if (!res.ok) {
    throw new Error(`API error: ${res.status}`);
  }

  return res.json();
};
