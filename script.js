// Unit Testing with Jest - Functions to test

// Make sure what is returned is not null, check if a value is truthy

const add = (a, b) => {
  return a + b;
};

// Create a function that creates an object with two properties, test to make sure that objects properties are equal to your test function

const usersName = (firstName, secondName) => {
  return {
    firstName: firstName,
    secondName: secondName,
  };
};

// Write a function which will return items in an array with 6 or more characters.

const checkLength = (array) => {
  return array.filter((x) => x.length > 6);
};

// Convert a string to a number

const numberToString = (num) => {
  return num.toString();
};

// Display the correct planet with the number order it is away from the sun

const findPlanetPosition = (planet) => {
  const planets = [
    "Mercury",
    "Venus",
    "Earth",
    "Mars",
    "Jupiter",
    "Saturn",
    "Uranus",
    "Neptune",
  ];
  if (planets.includes(planet)) {
    return planets.indexOf(planet) + 1;
  }
  return "That's not a planet";
};

// Count the amount of students present in the class. With an array or boolean values, count how many students are present (true = present)

const countStudents = (students) => {
  return students.filter((x) => x == true).reduce((x, y) => x + 1, 0);
};

// Square every digit and concatenate them (must return an integer)

const squareMultipy = (num) => {
  // squares every digit and concatonates them
  return parseInt(
    Array.from(num.toString(), (x) => (parseInt(x) ** 2).toString()).reduce(
      (x, y) => x + y,
      ""
    )
  );
};

// Given a year, return teh century it is in

const getCentury = (year) => {
  return Math.floor(year / 100);
};

// With an array of ones and zeroes, convert the equivalent binary value to an integer

const binaryToInt = (digits) => {
  return parseInt(digits.join(""), 2);
};

module.exports = {
  add,
  usersName,
  checkLength,
  numberToString,
  findPlanetPosition,
  countStudents,
  squareMultipy,
  getCentury,
  binaryToInt,
};
