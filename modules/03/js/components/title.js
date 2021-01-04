import styled from "../syled-component/index.js";
import { component as Component } from "../react/index.js";

const props = {
  message: "No Te Rindas",
  name: "Julio",
};
const containerStyles = styled.div`
  display: flex;
  justify-content: center;
  align-item: center;
  width: 50%;
  height: 100%;
  margin: 0 auto;
  background-color: Black;
`;
const titleStyled = styled.h1`
  color: orange;
  font-family: system-ui;
  text-shadow: 2px 2px 0 black;
  margin: auto 0;
`;
const Title = Component`------${"message"}------${"name"}`(props);

export default containerStyles(titleStyled(Title))