// Creating a function that returns a license badge based on which license is passed in
function renderLicenseBadge(license) {
    if (license !== "none") {
      return `![Github license](https://img.shields.io/badge/license-${license}-blue.svg)`;
    }
    return "";
  }

function renderLicenseLink(license) {
    if (license !== 'no license') {
    return `
    [${license}](https://choosealicense.com/licenses/${license})
      `;
    } else {
      return ' ';
    }
  }  

function renderLicenseSection(license) {
    if (license !== 'no license') {
    return `
    ## [License](#table-of-contents)
  
    The application is covered under the following license:
  
    ${renderLicenseLink(license)}
      `;
    } else {
      return ' ';
    }
   }

function renderLicenseTOC(license) {
    if (license !== 'no license') {
    return `
    * [License](#license)
      `;
    } else {
      return ' ';
    }
   }

//Creating a function to generate markdown for README
function generateMarkdown(data) {
    return `
    # ${data.title}
    
    ${renderLicenseBadge(data.license)}
  
    ## Table-of-Contents
  
    * [Description](#description)
    * [Installation](#installation)
    * [Usage](#usage)
    ${renderLicenseTOC(data.license)}
    * [Contributing](#contributing)
    * [Tests](#tests)
    * [Questions](#questions)
    
    ## [Description](#table-of-contents)
    
    ${data.description}
  
    ## [Installation](#table-of-contents)
  
    ${data.installation}
  
    ## [Usage](#table-of-contents)
  
    ${data.usage}
    
    Want to add screenshots in this section to give visual examples? Check out this site to learn how!
    
    [How to add a screenshot in your GitHub readme file?](https://medium.com/analytics-vidhya/how-to-add-a-screenshot-in-your-github-readme-file-176afeb8ad86)
    
    ${renderLicenseSection(data.license)}
  
    ## [Contributing](#table-of-contents)
    
    ${renderContributingSection(data.contribute)}
  
    ## [Tests](#table-of-contents)
  
    ${data.test}
  
    ## [Questions](#table-of-contents)

    Contact me if you have any questions:

    ${data.questions}
  `;
  }
  
  
  module.exports = generateMarkdown;