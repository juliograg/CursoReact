import { Component, createElement } from "../lib/react/index.js";
import styled from "../lib/styled-components.js";
import Form from "./form.js";
import Input from "./input.js";
import Button from "./button.js";

class Search extends Component {
  render() {
    return Form({
      children: [
        new Input({
          placeholder: "Escribe tu pelicula favorita",
          name: "title",
          type: "text",
        }),
        new Button(null, "Buscar"),
      ],
    });
  }
}

export default Search;

// <div class="wrapper">
//     <img src="./images/logo.png" alt="" />
//   </div>
// </header>
// <section class="wrapper">
//   <div class="actions">
//
//     <button id="recommended">Películas recomendadas</button>
//     <select name="" id="filter">
//       <option value="all">Todas</option>
//       <option value="most-valued">Más valoradas</option>
//       <option value="least-valued">Menos valoradas</option>
//     </select>
//   </div>
