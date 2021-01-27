import { createElement } from "./react/index.js";
const tags = [
  "div",
  "h2",
  "h1",
  "marquee",
  "section",
  "a",
  "header",
  "footer",
  "h3",
  "img",
  "form",
  "input",
  "button",
  "select",
];

function buildStyles(strings, dynamicValues, props) {
  let style = strings.slice();
  dynamicValues.forEach((value, i) => {
    style[i] += value(props);
  });
  return style.join("");
}

const styled = {};
tags.forEach((tag) => {
  styled[tag] = function (strings, ...dynamicValues) {
    return function (props, content) {
      const style = buildStyles(strings, dynamicValues, props);
      return createElement(tag, { ...props, style }, content);
    };
  };
});

export default styled;
