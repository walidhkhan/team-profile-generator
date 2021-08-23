const Employee = require("../lib/Employee.js");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof(e)).toBe("object");
});
​
test("Can set name via constructor arguments", () => {
  const name = "Steve";
  const e = new Employee(name);
  expect(e.name).toBe(name);
});

test("Can set id", () => {
  const id = 1;
  const e = new Employee('Steve', id);
  expect(e.id).toBe(id);
});

test("Can set email", () => {
  const email = 'test@test.com';
  const e = new Employee('Steve', 1, email);
  expect(e.email).toBe(email);
});

test("Name method", () => {
    const name = "Steve";
    const e = new Employee(name);
    expect(e.getName()).toBe(name);
});

