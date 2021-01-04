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

export {
    component
};
