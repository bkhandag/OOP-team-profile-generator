const Manager = require("../lib/Manager");

describe("Manager", () => {
  describe("getName", () => {
    it("should return the Managers name as a string", () => {

        //Arrange:
        var expected = "Jared";

        //Act:
        const result = new Manager("Jared","jared@gmail.com",12,45).getName();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getId", () => {
    it("should return the Managers Id", () => {

        //Arrange:
        var expected = 12;

        //Act:
        const result = new Manager("Jared","jared@gmail.com",12,45).getId();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getEmail", () => {
    it("should return the Managers Email", () => {

        //Arrange:
        var expected = "jared@gmail.com";

        //Act:
        const result = new Manager("Jared","jared@gmail.com",12,45).getEmail();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return the Managers Role", () => {

        //Arrange:
        var expected = "Manager";

        //Act:
        const result = new Manager("Jared","jared@gmail.com",12,45).getRole();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getOfficeNumber", () => {
    it("should return the Managers OfficeNumber", () => {

        //Arrange:
        var expected = 45;

        //Act:
        const result = new Manager("Jared","jared@gmail.com",12,45).getOfficeNumber();

        //Assert:
        expect(result).toEqual(expected);
    });
  });


})