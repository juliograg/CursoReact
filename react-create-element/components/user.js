import { Component, createElement } from "../lib/react/index.js";

class User extends Component {
  displayName = "User";
  state = {
    age: this.props.age,
  };
  componentDidMount() {
    console.log(`el componente ${this.displayName} se renderizo`);
  }
  componentWillMount() {
    console.log(`el componente ${this.displayName} va renderizar primera vez`);
  }
  componentDidUpdate() {
    console.log(`el componente ${this.displayName} se actualizo`);
  }
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
    console.log(this.state.age);
    this.setState({
      age: this.state.age + 1,
    });
  };

  render() {
    const { avatar, name } = this.props;
    const { age } = this.state;
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
        createElement("h2", null, `Hola soy ${name} y tengo ${age} anios`),
      ],
    });
  }
}
export default User;
