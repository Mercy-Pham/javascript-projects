// launchcode.test.js code:
const launchcode = require('../index.js');

describe("Testing launchcode", function(){
  // Write your unit tests here!
  test("check  the value of organization", function(){
    expect(launchcode.organization).toBe("nonprofit");
  });

  test("check the value of executiveDirector", function() {
    expect(launchcode.executiveDirector).toBe("Jeff");
  });

  test("check the value of percentageCoolEmployees", function(){
    expect(launchcode.percentageCoolEmployees).toBe(100);
  });

  test("check the value of programsOffered that has an array with courses", function() {
    expect(launchcode.programsOffered[0]).toBe('Web Development');
    expect(launchcode.programsOffered[1]).toBe('Data Analysis');
    expect(launchcode.programsOffered[2]).toBe('Liftoff');
  });

  test("check programsOffered has an array of the correct length", function() {
    expect(launchcode.programsOffered.length).toBe(3);
  });

  test("check launchOutput is divisible by 2", function() {
    expect(launchcode.launchOutput(2)).toBe("Launch");
  });
});