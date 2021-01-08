import movies from "./movies.js";
import render from "./render.js";
const $button = document.getElementById("recommended");

$button.addEventListener("click", () => {
  const recommendedMovies = setRecommendedMovies(movies);
  console.table(recommendedMovies, ["title", "vote_average", "recommended"]);
  render(recommendedMovies);
});

function setRecommendedMovies(movies) {
  const newMovies = movies.map((movie) => {
    if (movie.vote_average > 7) {
      return {
        ...movie,
        recommended: true,
      };
    }
    return {
      ...movie,
      recommended: false,
    };
  });
  //   console.table(newMovies, ["title", "vote_average", "recommended"]);
  return newMovies;
}
