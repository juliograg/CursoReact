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

export default styled