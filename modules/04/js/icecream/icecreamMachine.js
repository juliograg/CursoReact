import { isRequired } from "./validation.js";

function makeIcecream([
  flavor1 = isRequired("flavor1"),
  flavor2 = isRequired("flavor1"),
  ...flavors
]) {
  console.log(flavors);
  alert(
    `tienes un helado de ${flavor1.dataset.flavor} con ${
      flavor2.dataset.flavor
    } con los siguiente sabores adicionales ${flavors.map(
      (flavor) => flavor.dataset.flavor
    )}`
  );
}

export { makeIcecream };
