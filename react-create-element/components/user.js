import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  //-------Forma de arregla el this con constructor-----------
  // constructor(props) {
  //   console.log(props);
  //   super(props);
  //   this.handelClick = this.handelClick.bind(this);
  // }
  // handelClick(e) {
  //   console.log(this.props.name, e);
  // }

  handelClick = (e) => {
    console.log(this.props.name, e);
  };

  render() {
    const { avatar, name } = this.props;
    return createElement("div", {
      class: "user",
      onClick: this.handelClick,
      children: [
        createElement("div", {
          class: "avatar",
          children: createElement("img", {
            src: avatar,
          }),
        }),
        createElement("h2", null, name),
      ],
    });
  }
}
export default User;
