import {
  useParams,
  useRouteLoaderData,
  Link,
} from "react-router-dom";

export default function CountryDetails() {
  const { countryName } = useParams();
  const countries = useRouteLoaderData("root");

  const country = countries.find(
    (c) => c.name.common.toLowerCase() === countryName
  );

  if (!country) {
    return <p> País no encontrado</p>;
  }

  const languages = country.languages
    ? Object.values(country.languages).join(", ")
    : "No disponibles";

  const borders = country.borders || [];

  const borderCountries = borders
    .map((code) =>
      countries.find((c) => c.cca3 === code)
    )
    .filter(Boolean);

  return (
    <div>
      <h1>{country.name.official}</h1>
      <p><strong>Capital:</strong> {country.capital?.[0]}</p>
      <p>
        <strong>Población:</strong>{" "}
        {country.population.toLocaleString()}
      </p>
      <p>
        <strong>Región:</strong> {country.region} –{" "}
        {country.subregion}
      </p>
      <p><strong>Idiomas:</strong> {languages}</p>

      <h3>Países Fronterizos</h3>
      {borderCountries.length === 0 && <p>Ninguno</p>}

      <ul>
        {borderCountries.map((b) => (
          <li key={b.cca3}>
            <Link to={`/country/${b.name.common.toLowerCase()}`}>
              {b.name.common}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
