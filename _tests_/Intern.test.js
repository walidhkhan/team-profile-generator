const Employee = require("../lib/Employee.js");
const Intern = require("../lib/Intern.js");

test("Can instantiate Intern instance", () => {
  const e = new Intern();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const testname = "Steve";
  const e = new Intern();
  e.name = testname;

  expect(e.name).toBe(testname);
});

test("Can set id", () => {
  const testid = 1;
  const e = new Intern();
  e.id = testid;

  expect(e.id).toBe(testid);
});

test("Can set email", () => {
  const testemail = 'test@test.com';
  const e = new Intern();
  e.email = testemail;
  expect(e.email).toBe(testemail);
});


test("Name method", () => {
  const testname = "Steve";
  const e = new Intern();
  e.name = testname;
  expect(e.getName()).toBe(testname);
});

test("Id method", () => {
  const testid = 1;
  const e = new Intern();
  e.id = testid;
  expect(e.getId()).toBe(testid);
});

test("Email method", () => {
  const testemail = 'test@test.com';
  const e = new Intern();
  e.email = testemail;
  expect(e.getEmail()).toBe(testemail);
});

test("Role method", () => {
  const e = new Intern();
  expect(e.getRole()).toBe('Intern');
});

test("School method", () => {
  const testschool = 'University of Arizona';
  const e = new Intern();
  e.school = testschool;
  expect(e.getSchool()).toBe(testschool);
});