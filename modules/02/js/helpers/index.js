import { BURN } from "../actions/index.js";
import store from "../store.js"


const goalCal = (name) => {
  const { calPizza, calSoda } = store.getState();
  const success = `quemaste todas las calorias de ${name}`;
  const message = `te faltan quemar ${
    name === "pizza" ? calPizza.toFixed(2) : calSoda.toFixed(2)
  } calorias para llegar a las calorias de la ${name}`;

  switch (name) {
    case "pizza":
      if (calPizza > 0) {
        window.result.textContent = message;
      } else {
        window.result.textContent = success;
      }
      break;
    case "soda":
      if (calSoda > 0) {
        window.result.textContent = message;
      } else {
        window.result.textContent = success;
      }
    default:
      break;
  }
};

const burn = () => {
  window.result.textContent = "";
  store.dispatch({ type: BURN, payload: 1.42 });
};
export { goalCal, burn };
