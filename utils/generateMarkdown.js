// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string

function renderLicenseBadge(license) {
  switch (license) {
    case 'MIT':
      console.log('MIT');
      return '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
      console.log('Apache');
      return '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)';
    case 'Perl':
      console.log('Perl');
      return '[![License: Artistic-2.0](https://img.shields.io/badge/License-Perl-0298c3.svg)](https://opensource.org/licenses/Artistic-2.0)';
}}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  switch (license) {
    case 'MIT':
      console.log('MIT');
      return '(https://opensource.org/licenses/MIT)';
    case 'Apache 2.0':
        console.log('Apache');
        return '(https://opensource.org/licenses/Apache-2.0)';
    case 'Perl':
        console.log('Perl');
        return '(https://opensource.org/licenses/Artistic-2.0)';
    }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.Title}
${renderLicenseBadge(data.license)}
## Description
- 
${data.Description}
## Table of Contents
- Description
- Installation 
- Usage
- License
- Contribution
- Tests
- Licensing
- Questions

## Installation
${data.Installation}

## Usage
${data.Usage}

## Credits
${data.Contributions}

## Tests
${data.Tests}

## Licensing
${data.license}

## Questions
You can find my Github info at ${data.Github} or for any further questions you can reach me at my email ${data.email}

`;
}

module.exports = generateMarkdown;
