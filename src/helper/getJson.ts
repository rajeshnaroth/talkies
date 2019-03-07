export default async function getJson(url: string) {
  const response = await fetch(url);
  return response.json();
}
