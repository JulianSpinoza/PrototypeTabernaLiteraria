const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function pingBackend() {
  const response = await fetch(`${API_URL}/ping`);
  return response.json();
}

export async function getCreatures() {
  const response = await fetch(`${API_URL}/creatures`);
  return response.json();
}