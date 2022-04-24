class Engineer {
  
  constructor(github) {
      this.github = github;
  }
  getGithub() {}
  getRole() {} //&mdash; overriden to return Engineer
}

class Engineer extends Employee {}