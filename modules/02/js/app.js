import store from "./store.js";
import { goalCal, burn } from "./helpers/index.js";

const $burn = document.getElementById("burn");
const $pizza = document.getElementById("pizza");
const $soda = document.getElementById("soda");

store.subscribe(() => {
  window.result.textContent = `Haz quemado ${store
    .getState()
    .burnCal.toFixed(2)} calorías`;
});

$burn.addEventListener("click", burn);

$pizza.addEventListener("click", (e) => {
  goalCal(e.target.name);
});

$soda.addEventListener("click", (e) => {
  goalCal(e.target.name);
});
