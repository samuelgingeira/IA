import { NavLink } from "react-router-dom";
import { useState } from "react";

export default function CountryList({ countries }) {
  const [search, setSearch] = useState("");

  const filtered = countries.filter((c) =>
    c.name.common.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <>
      <input
        type="text"
        placeholder="Buscar país..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />

      <ul>
        {filtered.map((country) => (
          <li key={country.cca3}>
            <NavLink
              to={`/country/${country.name.common.toLowerCase()}`}
              className={({ isActive }) =>
                isActive ? "active" : ""
              }
            >
              <img src={country.flags.svg} alt="" />
              {country.name.common}
            </NavLink>
          </li>
        ))}
      </ul>
    </>
  );
}
