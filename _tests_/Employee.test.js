const Employee = require("../lib/Employee");

describe("Employee", () => {
  describe("getName", () => {
    it("should return the employees name as a string", () => {

        //Arrange:
        var expected = "Jared";

        //Act:
        const result = new Employee("Jared",12,"jared@gmail.com").getName();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getId", () => {
    it("should return the employees Id", () => {

        //Arrange:
        var expected = "12";

        //Act:
        const result = new Employee("Jared","12","jared@gmail.com").getId();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getEmail", () => {
    it("should return the employees Email", () => {

        //Arrange:
        var expected = "jared@gmail.com";

        //Act:
        const result = new Employee("Jared","12","jared@gmail.com").getEmail();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return the employees Role", () => {

        //Arrange:
        var expected = "Employee";

        //Act:
        const result = new Employee("Jared","12","jared@gmail.com").getRole();

        //Assert:
        expect(result).toEqual(expected);
    });
  });
})
