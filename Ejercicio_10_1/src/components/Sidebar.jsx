import { useLoaderData } from "react-router-dom";
import CountryList from "./CountryList";
import { useState } from "react";

export default function Sidebar() {
  const countries = useLoaderData();
  const [search, setSearch] = useState("");

  const filteredCountries = countries.filter((country) =>
    country.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <h2>Países del Mundo</h2>

      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <CountryList countries={filteredCountries} />
    </>
  );
}
