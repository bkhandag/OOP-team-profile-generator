const Intern = require("../lib/Intern");

describe("Intern", () => {
  describe("getName", () => {
    it("should return the Interns name as a string", () => {

        //Arrange:
        var expected = "Jared";

        //Act:
        const result = new Intern("Jared","jared@gmail.com",12,"Purdue").getName();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getId", () => {
    it("should return the Intern Id", () => {

        //Arrange:
        var expected = 12;

        //Act:
        const result = new Intern("Jared","jared@gmail.com",12,"Purdue").getId();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getEmail", () => {
    it("should return the Interns Email", () => {

        //Arrange:
        var expected = "jared@gmail.com";

        //Act:
        const result = new Intern("Jared","jared@gmail.com",12,"Purdue").getEmail();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return the Intern Role", () => {

        //Arrange:
        var expected = "Intern";

        //Act:
        const result = new Intern("Jared","jared@gmail.com",12,"Purdue").getRole();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getSchool", () => {
    it("should return Interns school", () => {

        //Arrange:
        var expected = "Purdue";

        //Act:
        const result = new Intern("Jared","jared@gmail.com",12,"Purdue").getSchool();

        //Assert:
        expect(result).toEqual(expected);
    });
  });


})