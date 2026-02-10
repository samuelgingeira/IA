export async function countriesLoader() {
  const response = await fetch(
    "https://restcountries.com/v3.1/region/europe"
  );

  if (!response.ok) {
    throw new Error("No se pudieron cargar los países");
  }

  const data = await response.json();
  return data;
}
