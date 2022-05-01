const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  describe("getName", () => {
    it("should return the Engineers name as a string", () => {

        //Arrange:
        var expected = "Jared";

        //Act:
        const result = new Engineer("Jared",12,"jared@gmail.com","jared@github.com").getName();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getId", () => {
    it("should return the Engineers Id", () => {

        //Arrange:
        var expected = 12;

        //Act:
        const result = new Engineer("Jared",12,"jared@gmail.com","jared@github.com").getId();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getEmail", () => {
    it("should return the Engineers Email", () => {

        //Arrange:
        var expected = "jared@gmail.com";

        //Act:
        const result = new Engineer("Jared",12,"jared@gmail.com","jared@github.com").getEmail();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getRole", () => {
    it("should return the Engineers Role", () => {

        //Arrange:
        var expected = "Engineer";

        //Act:
        const result = new Engineer("Jared",12,"jared@gmail.com","jared@github.com").getRole();

        //Assert:
        expect(result).toEqual(expected);
    });
  });

  describe("getGithub", () => {
    it("should return the Engineers Github", () => {

        //Arrange:
        var expected = "jared@github.com";

        //Act:
        const result = new Engineer("Jared",12,"jared@gmail.com","jared@github.com").getGithub();

        //Assert:
        expect(result).toEqual(expected);
    });
  });
})