const Employee = require("../lib/Employee.js");
const Engineer = require("../lib/Engineer.js");

test("Can instantiate Engineer instance", () => {
  const e = new Engineer();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const testname = "Steve";
  const e = new Engineer();
  e.name = testname;

  expect(e.name).toBe(testname);
});

test("Can set id", () => {
  const testid = 1;
  const e = new Engineer();
  e.id = testid;

  expect(e.id).toBe(testid);
});

test("Can set email", () => {
  const testemail = 'test@test.com';
  const e = new Engineer();
  e.email = testemail;
  expect(e.email).toBe(testemail);
});


test("Name method", () => {
  const testname = "Steve";
  const e = new Engineer();
  e.name = testname;
  expect(e.getName()).toBe(testname);
});

test("Id method", () => {
  const testid = 1;
  const e = new Engineer();
  e.id = testid;
  expect(e.getId()).toBe(testid);
});

test("Email method", () => {
  const testemail = 'test@test.com';
  const e = new Engineer();
  e.email = testemail;
  expect(e.getEmail()).toBe(testemail);
});

test("Role method", () => {
  const e = new Engineer();
  expect(e.getRole()).toBe('Engineer');
});

test("Github method", () => {
  const testgithub = 'githubuser';
  const e = new Engineer();
  e.github = testgithub;
  expect(e.getGithub()).toBe(testgithub);
});