import Link from "next/link";
import { getAllActors } from "@/lib/cinema";

export default function ActorsPage() {
  const actors = getAllActors();

  return (
    <main>
      <h1>Actores</h1>

      <ul>
        {actors.map(actor => (
          <li key={actor.id}>
            <Link href={`/actors/${actor.id}`}>
              <img src={actor.photo} alt={actor.name} width={100} />
              <p>{actor.name}</p>
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
}
