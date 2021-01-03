import { createStore } from "./redux/index.js";
import reducer from "./reducer/index.js";

const store = createStore(reducer, {
  burnCal: 0,
  calPizza: 1835,
  calSoda: 97,
});

export default store