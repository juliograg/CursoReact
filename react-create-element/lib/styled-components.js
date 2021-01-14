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
const styled = {};
tags.forEach((tag) => {
  styled[tag] = function (styles) {
    return function (content) {
      return `<${tag} ${tag === "img" ? content : ""} style="${styles}">
      ${tag === "img" ? "" : content}</${tag}>`;
    };
  };
});

export default styled;
