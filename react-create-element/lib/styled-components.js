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
];

function buildStyles(strings, dynamicValues, props) {
  console.log(strings, "soy yo");
  let style = strings.slice();
  console.log(style);
  dynamicValues.forEach((value, i) => {
    // console.log(props);
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
