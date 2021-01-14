import { Component, createElement } from "../lib/react/index.js";

class Wrapper extends Component {
  render() {
    const { children } = this.props;
    return createElement("div", {
      class: "wrapper",
      children,
    });
  }
}

// <div class="wrapper">
//   ${children}
// </div>
export default Wrapper;
