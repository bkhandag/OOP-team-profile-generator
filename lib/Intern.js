class Intern {
    
    constructor(school) {
        this.school = school;
    }
    getSchool() {}
    getRole() {} //&mdash; overriden to return Intern
  }
  
  class Intern extends Employee {}