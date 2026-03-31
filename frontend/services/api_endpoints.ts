const API_URL = process.env.EXPO_PUBLIC_API_URL;

export async function getCreatures(query:string) {
  const response = await fetch(`${API_URL}/creatures?${query}`);
  return response.json();
}

export async function getOneCreature() {
  const response = await fetch(`${API_URL}/creatures/:id`);
  return response.json();
}

export async function getClassifiers(category_slug:string) {
  const response = await fetch(
    `${API_URL}/creatures/classifiers/${category_slug}`,
  );
  return response.json();
}