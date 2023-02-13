const User = require("../src/User");
describe("user integrity checks", function () {
  test(" User has a username", function () {
    const person1 = new User("Ducky", "hello", 18);
    expect(person1.userName).toBe("Ducky");
  });
  test("user has a password", function () {
    const person1 = new User("Ducky", "hello", 18);
    expect(person1.password).toBe("hello");
  });
  test("user has an age", function () {
    expect(person1.age).toBe(18);
  });
});
// User tests here

// test username

// test password

// test age

// test login

// test logout
