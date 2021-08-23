const Employee = require("../lib/Employee.js");
const Manager = require("../lib/Manager.js");

test("Can instantiate Intern instance", () => {
  const e = new Manager();
  expect(typeof (e)).toBe("object");
});

test("Can set name via constructor arguments", () => {
  const testname = "Steve";
  const e = new Manager();
  e.name = testname;

  expect(e.name).toBe(testname);
});

test("Can set id", () => {
  const testid = 1;
  const e = new Manager();
  e.id = testid;

  expect(e.id).toBe(testid);
});

test("Can set email", () => {
  const testemail = 'test@test.com';
  const e = new Manager();
  e.email = testemail;
  expect(e.email).toBe(testemail);
});


test("Name method", () => {
  const testname = "Steve";
  const e = new Manager();
  e.name = testname;
  expect(e.getName()).toBe(testname);
});

test("Id method", () => {
  const testid = 1;
  const e = new Manager();
  e.id = testid;
  expect(e.getId()).toBe(testid);
});

test("Email method", () => {
  const testemail = 'test@test.com';
  const e = new Manager();
  e.email = testemail;
  expect(e.getEmail()).toBe(testemail);
});

test("Role method", () => {
  const e = new Manager();
  expect(e.getRole()).toBe('Manager');
});

test("Office number method", () => {
    const testofficenumber = 2;
    const e = new Manager();
    e.officeNumber = testofficenumber;
    expect(e.getOfficeNumber()).toBe(testofficenumber);
  });



