const sum = (a, b) => {
  return a + b;
};

const printOnlyString = (newString) => {
  if (typeof newString == "string") {
    return newString;
  } else {
    return "Only string needed";
  }
};

module.exports = {
  sum,
  printOnlyString,
};
