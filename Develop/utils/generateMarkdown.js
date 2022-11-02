// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(data) {

  let licenseType= `${data.license}`;

  let YourLicense= "";

  // console.log("licensee",licenseType);
  if(licenseType=== "MIT"){
    YourLicense = `${licenseType}: [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  }else if(licenseType=== "APACHE(2.0)"){
    YourLicense= `${licenseType}:[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  }else if(licenseType=== "GPL(3.0)"){
    YourLicense= `${licenseType}:[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
}else if(licenseType=== "BSD(3)"){
  YourLicense= `${licenseType}:[![License: BSD(3)](https://img.shields.io/badge/License-BSD(3)-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
}else if(licenseType=== "MPL(2.0)"){
  YourLicense= `${licenseType}:[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}else if(licenseType=== "CDDL(1.0)"){
  YourLicense= `${licenseType}:[![License: MPL 2.0](https://img.shields.io/badge/License-CDDL(1.0)-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`
}else if(licenseType=== "EPL(2.0)"){
  YourLicense= `${licenseType}:[![License: MPL 2.0](https://img.shields.io/badge/License-EPL(2.0)-RED.svg)](https://opensource.org/licenses/MPL-2.0)`
}else{
  YourLicense = 'none';
}
// console.log( YourLicense);
return YourLicense;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
// function renderLicenseSection(license) {

//   if(data.license){
    
//   }
// }

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `

  ## License 
   ${renderLicenseBadge(data)}

  ## Git User Name: ${data.username}

  ## Emaill Address: ${data.email}

  ##  Project Title
  ${data.title}

  ## Project Description
  ${data.description}

  ## Table-of-Contents

  * [Installation Instructions](#installation-instructions)
  * [Usage Information](#usage-information) 
  * [Contribution Guidelines](#contribution-guidelines)
  * [Test Instructions](#test-instructions)


  ## [Installation Instructions](#table-of-contents)
  ${data.installationInstructions}

  ## [Usage Information](#table-of-contents)
  ${data.usageInformation}

  ## [Contribution Guidelines](#table-of-contents)
  ${data.contributionGuidelines}

  ## [Test Instructions](#table-of-contents)
  ${data.testInstructions}

  ## Git Hub Profile Link

  https://github.com/${data.username}/

  ## Contact

  ${data.email}

`;
}

module.exports = generateMarkdown;
