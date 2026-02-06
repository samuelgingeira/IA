import Link from "next/link";
import {
  getMovieById,
  getCastByMovieId
} from "@/lib/cinema";

export default function MovieDetailPage({ params }) {
  const movie = getMovieById(params.movieId);
  const cast = getCastByMovieId(params.movieId);

  if (!movie) return <p>Película no encontrada</p>;

  return (
    <main>
      <h1>{movie.title}</h1>
      <img src={movie.poster} alt={movie.title} width={200} />
      <p><strong>Año:</strong> {movie.year}</p>
      <p><strong>Director:</strong> {movie.director}</p>
      <p>{movie.synopsis}</p>

      <h2>Reparto</h2>
      <ul>
        {cast.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              <img src={actor.photo} alt={actor.name} width={80} />
              <p>{actor.name} — {actor.character}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
