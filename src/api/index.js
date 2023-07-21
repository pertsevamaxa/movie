const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization:
      "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyMzAxN2RhZTg5YjM3ZWM0MmJlYzhlYmY5MmJhMzI0MCIsInN1YiI6IjY0OWI2NjlmYWY1OGNiMDBlMmE3OTc2YSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.dBt7pUO4JfqSrbRTYfW53XLYX45dXxY6kw3XEu83d5M",
  },
};

export const getMoviesBySearch = (page, search = "a") => {
  return fetch(
    `https://api.themoviedb.org/3/search/movie?query=${search}&include_adult=false&language=en-US&page=${page}`,
    options
  )
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};

export const getPosterByMovieId = (id) => {
  return fetch(`https://api.themoviedb.org/3/movie/${id}/images`, options)
    .then((response) => response.json())
    .then((response) => response)
    .catch((err) => console.error(err));
};

export const getMovies = async (page, search) => {
  const movies = await getMoviesBySearch(page, search);
  return movies;
};
