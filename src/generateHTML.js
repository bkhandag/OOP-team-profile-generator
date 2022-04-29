  // TODO: Create a function to generate markdown for README
  function generateHTML(data) {
  
    return `# Title: ${data.projectTitle}
  
    ${renderLicenseBadge(data.license)}
  
    ## Description:
    ${data.description}
    
    ## Table of Contents:
    \n * [Description](#description)
    \n * [Installation Instructions](#installation)
    \n * [Usage](#usage)
    \n * [Contribution](#contribution)
    \n * [Tests](#tests)
    \n * [Questions](#questions)
  
    ## Installation Instructions:
    ${data.installationInstructions}
    
    ## Usage:
    ${data.usage}
    
    ## ${renderLicenseSection(data.license)}
    
    ## Contribution:
    ${data.contribution}
    
    ## Tests:
    ${data.tests}
    
    ## Questions:
    For additional questions, reach out to me:
    \n Github: https://github.com/${data.githubUsername}
    \n Email: ${data.email}
    `
  }
  
  module.exports = generateHTML;

  // for loop over array for each team member make a html section
  `<section>
    <div>${member.name}</div>
  </section>`

  // arrayOfSections.join("")

`<main>
  ${arrayofSections}
</main>`