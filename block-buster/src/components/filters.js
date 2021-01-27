import { Component, createElement } from "../lib/react/index.js";
import Select from "./select.js";

class Filters extends Component {
  render() {
    return Select({
      children: [
        createElement("option", { value: "all" }, "Todas"),
        createElement("option", { value: "mostValued" }, "Mas valoradas"),
        createElement("option", { value: "leastValued" }, "Menos Valoradas"),
      ],
    });
  }
}

export default Filters;
//     <select name="" id="filter">
//       <option value="all">Todas</option>
//       <option value="most-valued">Más valoradas</option>
//       <option value="least-valued">Menos valoradas</option>
//     </select>
