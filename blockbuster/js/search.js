import movies from "./movies.js";
import render from "./render.js";
const $search = document.querySelector("#search-form");

$search.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const query = formData.get("title");
  const movies = searchMovie(query);
  if (movies) {
    console.log("dssdsd");
    return render(movies);
  }
  console.log("dssdsd");
  return alert("no se encontro la movie");
});

function filterByTitle(movieTitle) {
  return movies.filter(({ title }) =>
    title.toLowerCase().includes(movieTitle.toLowerCase())
  );
}

function findById(id) {
  return movies.find((movie) => parseInt(id, 10) === movie.id)
}

function searchMovie(query) {
  if (isNaN(query)) {
    return filterByTitle(query);
  }
  return [findById(query)];
}
