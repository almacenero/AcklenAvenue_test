const { sum, printOnlyString } = require("./../src/helpers");

describe("helpers function should run", () => {
  test("Should add to numbers", () => {
    expect(sum(2, 2)).toEqual(4);
  });
  test("should only print strings", () => {
    expect(printOnlyString("4")).toEqual("4");
  });
});
