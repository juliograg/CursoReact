function buildElement({ title, id, poster_path, vote_average, recommended }) {
  const $template = document.createElement("article");
  $template.classList.add("movie");
  recommended && $template.classList.add("recommended");
  const URL = `https://image.tmdb.org/t/p/w220_and_h330_face${poster_path}`;
  $template.innerHTML = `
        <img
          class="movie-poster"
          src=${URL}
          alt="${title}"
        />
        <p class="movie-title">${title}</p>
        <p class="movie-id">${id}</p>
        <span class="movie-rate">${vote_average}</span>
    `;
  return $template;
}

export function renderMovieListFromMap(list, map) {
  cleanMovieList();
  list.forEach((movieId) => renderElement(map.get(movieId)));
}

function cleanMovieList() {
  const $container = document.getElementById("container");
  $container.innerHTML = "";
}

function renderElement(movie) {
  const $container = document.getElementById("container");
  const element = buildElement(movie);
  $container.append(element);
}

export default function renderMovieList(list) {
  cleanMovieList();
  list.forEach(renderElement);
}
