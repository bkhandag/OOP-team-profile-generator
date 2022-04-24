class Manager {
    
    constructor(officeNumber) {
        this.officeNumber = officeNumber;
    }
    getRole() {} //&mdash; overriden to return Manager
  }
  
  class Manager extends Employee {}