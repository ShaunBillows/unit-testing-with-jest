const tests = require("./script");

describe('add :', () => {
  it("should not return null", () => {
    expect(tests.add(1, 2)).not.toBe(null);
  });
  it("should return a truthy value", () => {
    expect(tests.add(1, 2)).not.toBe(0);
  });
  it("should return a value that is not false", () => {
    expect(tests.add(1, 2)).not.toBe(false);
  });
})

describe('userName :', () => {
  it("should return the parameters as the keys", () => {
    expect(Object.values(tests.usersName("first", "second"))).toStrictEqual([
      "first",
      "second",
    ]);
  });
})

describe('checkLength :', () => {
  it("should return items with length greater than 6", () => {
    expect(
      tests.checkLength(["111", "2222", "4444444", "55555555"])
    ).toStrictEqual(["4444444", "55555555"]);
  });
})


describe('numberToString :', () => {
  it("should return a string", () => {
    expect(typeof tests.numberToString(5)).toEqual(typeof "string");
  });
})


describe('findPlanetPosition :', () => {
  it("should return the position of planet Earth", () => {
    expect(tests.findPlanetPosition("Earth")).toBe(3);
  });
})



describe('countStudents :', () => {
  it("Should return the correct number of students", () => {
    expect(tests.countStudents([true, true, true, false, true])).toBe(4);
  });
})


describe('squareMultipy :', () => {
  it("should return 916", () => {
    expect(tests.squareMultipy([34])).toBe(916);
  });
})

describe('getCentury :', () => {
  it("should return the 17th century", () => {
    expect(tests.getCentury(1705)).toBe(17);
  });
})

describe('binaryToInt :', () => {
  it("should return 4", () => {
    expect(tests.binaryToInt([0, 1, 0, 0])).toBe(4);
  });
})
