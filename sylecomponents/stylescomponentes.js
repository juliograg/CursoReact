function render(component, container) {
  container.innerHTML = component;
}

function component(strings, ...dynamicValues) {
  return function (props) {
    let newContent = strings.slice();
    dynamicValues.forEach((value, index) => {
      newContent[index] += props[dynamicValues[index]];
      // console.log(newContent.join(''))
    });
    return newContent.join("");
  };
}
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
];
const styled = {};
tags.forEach((tag) => {
  styled[tag] = function (styles) {
    return function (content) {
      return `<${tag} style="${styles}">${content}</${tag}>`;
    };
  };
});
