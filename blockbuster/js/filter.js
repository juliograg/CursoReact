import { renderMovieListFromMap } from "./render.js";
import { all, notPopular as leastValued, popular as mostValued, movieList } from "./normalize.js";

window.filter.addEventListener("change", function () {
  switch (this.value) {
    case "most-valued":
      renderMovieListFromMap(mostValued, movieList);
      return "most";
    case "least-valued":
      return renderMovieListFromMap(leastValued, movieList);

    default:
      return renderMovieListFromMap(all, movieList);
  }
});
