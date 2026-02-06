import Link from "next/link";
import {
  getActorById,
  getFilmographyByActorId
} from "@/lib/cinema";

export default function ActorDetailPage({ params }) {
  const actor = getActorById(params.actorId);
  const movies = getFilmographyByActorId(params.actorId);

  if (!actor) return <p>Actor no encontrado</p>;

  return (
    <main>
      <h1>{actor.name}</h1>
      <img src={actor.photo} alt={actor.name} width={200} />
      <p><strong>Nacimiento:</strong> {actor.birthYear}</p>
      <p>{actor.bio}</p>

      <h2>Filmografía</h2>
      <ul>
        {movies.map(movie => (
          <li key={movie.id}>
            <Link href={`/movies/${movie.id}`}>
              <img src={movie.poster} alt={movie.title} width={100} />
              <p>{movie.title}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
