const {sum} = require("./../src/helpers")

describe("helpers function should run", ()=>{
  test("Should add to numbers",()=>{
    expect(sum(2,2)).toEqual(4)
  })
})