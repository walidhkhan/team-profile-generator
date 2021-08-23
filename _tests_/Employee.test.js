const Employee = require("../lib/Employee.js");

test("Can instantiate Employee instance", () => {
  const e = new Employee();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const testname = "Steve";
  const e = new Employee();
  e.name = testname;

  expect(e.name).toBe(testname);
});

test("Can set id", () => {
  const testid = 1;
  const e = new Employee();
  e.id = testid;

  expect(e.id).toBe(testid);
});

test("Can set email", () => {
  const testemail = 'test@test.com';
  const e = new Employee();
  e.email = testemail;
  expect(e.email).toBe(testemail);
});

test("Name method", () => {
  const testname = "Steve";
  const e = new Employee();
  e.name = testname;
  expect(e.getName()).toBe(testname);
});

test("Id method", () => {
  const testid = 1;
  const e = new Employee();
  e.id = testid;
  expect(e.getId()).toBe(testid);
});

test("Email method", () => {
  const testemail = 'test@test.com';
  const e = new Employee();
  e.email = testemail;
  expect(e.getEmail()).toBe(testemail);
});



