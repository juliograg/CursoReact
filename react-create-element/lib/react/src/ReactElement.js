import { render } from "../../react-dom.js";

function renderChildren(children, container) {
  if (Array.isArray(children)) {
    return children.forEach((child) => render(child, container));
  }
  return render(children, container);
}

function setEvent(element, event, callback) {
  return element.addEventListener(event, callback);
}

function setProperties(prop, value, element) {
  //event support
  if (prop.startsWith("on")) {
    const event = prop.replace("on", "").toLowerCase();
    return setEvent(element, event, value);
  }
  if (prop === "children") {
    //supor for childrens
    return renderChildren(value, element);
  }
  //suport from attributes
  return element.setAttribute(prop, value);
}

export function createElement(type, props, content) {
  //Creando tipo de elemento
  const element = document.createElement(type);

  //Contenido
  if (content) {
    element.textContent = content;
  }
  if (props) {
    Object.keys(props).forEach((prop) =>
      setProperties(prop, props[prop], element)
    );
  }
  return element;
}
