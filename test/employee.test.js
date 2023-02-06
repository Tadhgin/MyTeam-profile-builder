const Employee = require("../lib/Employee");

test("Instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof e).toBe("object");
});

test("Set name via constructor", () => {
  const name = "Maze";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Set id ", () => {
  const testValue = 100;
  const e = new Employee("Sam", testValue);
  expect(e.id).toBe(testValue);
});

test("Set email", () => {
  const testValue = "test@test.com";
  const e = new Employee("Sam", 1, testValue);
  expect(e.email).toBe(testValue);
});

test("Get name via getName()", () => {
  const testValue = "Maze";
  const e = new Employee(testValue);
  expect(e.getName()).toBe(testValue);
});

test("Get id via getId()", () => {
  const testValue = 100;
  const e = new Employee("Sam", testValue);
  expect(e.getId()).toBe(testValue);
});

test("Get email via getEmail()", () => {
  const testValue = "test@test.com";
  const e = new Employee("Sam", 1, testValue);
  expect(e.getEmail()).toBe(testValue);
});

test('getRole() should return "Employee"', () => {
  const testValue = "Employee";
  const e = new Employee("Maze", 1, "test@test.com");
  expect(e.getRole()).toBe(testValue);
});
