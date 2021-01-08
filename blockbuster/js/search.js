import movies from "./movies.js";
import render from "./render.js";
const $search = document.querySelector("#search-form");

$search.addEventListener("submit", function (e) {
  e.preventDefault();
  const formData = new FormData(this);
  const title = formData.get("title");
  const movies = filterByTitle(title);
  render(movies);
});

function filterByTitle(movieTitle) {
  return movies.filter(
    ({ title }) => title.toLowerCase().includes(movieTitle.toLowerCase())
  );
}
