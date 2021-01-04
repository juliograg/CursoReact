import { makeIcecream } from "./icecreamMachine.js";

function selectFlavor() {
  this.classList.toggle("is-active");
}

const $flavors = document.querySelectorAll(".flavor");
const $btn = document.querySelector("#btn");
$flavors.forEach(($flavor) => {
  $flavor.addEventListener("click", selectFlavor);
});

$btn.addEventListener("click", () => {
  const $activeFlavors = [...document.querySelectorAll(".flavor.is-active")];
  try {
    makeIcecream($activeFlavors);
  } catch (err) {
    alert("aun no completas los sabores para preparar el helado");
  }
});
