
export const MOVIES = [
  {
    id: "tt0133093",
    title: "The Matrix",
    year: 1999,
    director: "Hermanas Wachowski",
    poster: "/posters/the_matrix.jpg",
    synopsis:
      "Un programador descubre que su realidad es una simulación creada por máquinas."
  },
  {
    id: "tt0816692",
    title: "Interstellar",
    year: 2014,
    director: "Christopher Nolan",
    poster: "/posters/interstellar.jpg",
    synopsis:
      "Exploradores viajan por un agujero de gusano para salvar a la humanidad."
  },
  {
    id: "tt0110912",
    title: "Pulp Fiction",
    year: 1994,
    director: "Quentin Tarantino",
    poster: "/posters/pulp_fiction.jpg",
    synopsis:
      "Varias historias criminales que se cruzan en Los Ángeles."
  }
];

export const ACTORS = [
  {
    id: "nm0000206",
    name: "Keanu Reeves",
    birthYear: 1964,
    photo: "/photos/keanu_reeves.jpg",
    bio: "Actor canadiense famoso por Matrix y John Wick."
  },
  {
    id: "nm0005230",
    name: "Carrie-Anne Moss",
    birthYear: 1967,
    photo: "/photos/carrie_anne_moss.jpg",
    bio: "Actriz canadiense conocida por Trinity en Matrix."
  },
  {
    id: "nm0000201",
    name: "Samuel L. Jackson",
    birthYear: 1948,
    photo: "/photos/samuel_l_jackson.jpg",
    bio: "Uno de los actores más prolíficos de Hollywood."
  }
];

export const ROLES = [
  { movieId: "tt0133093", actorId: "nm0000206", character: "Neo" },
  { movieId: "tt0133093", actorId: "nm0005230", character: "Trinity" },
  { movieId: "tt0110912", actorId: "nm0000201", character: "Jules Winnfield" }
];


export function getAllMovies() {
  return MOVIES;
}

export function getMovieById(id) {
  return MOVIES.find(movie => movie.id === id);
}

export function getAllActors() {
  return ACTORS;
}

export function getActorById(id) {
  return ACTORS.find(actor => actor.id === id);
}


export function getCastByMovieId(movieId) {
  const roles = ROLES.filter(role => role.movieId === movieId);

  return roles.map(role => {
    const actor = ACTORS.find(a => a.id === role.actorId);
    return {
      ...actor,
      character: role.character
    };
  });
}

export function getFilmographyByActorId(actorId) {
  const roles = ROLES.filter(role => role.actorId === actorId);

  return roles.map(role => {
    return MOVIES.find(movie => movie.id === role.movieId);
  });
}
