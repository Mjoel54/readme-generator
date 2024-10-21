// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
export function renderLicenseBadge(license) {
  let licenseBadge = "";
  switch (license) {
    case "Apache License 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`;
      break;
    case "GNU General Public License v3.0":
      licenseBadge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`;
      break;
    case "MIT License":
      licenseBadge = `[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`;
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_2--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)`;
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseBadge = `[![License](https://img.shields.io/badge/License-BSD_3--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)`;
      break;
    case "Boost Software License 1.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-Boost_1.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)`;
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseBadge = `[![License: CC0-1.0](https://img.shields.io/badge/License-CC0_1.0-lightgrey.svg)](http://creativecommons.org/publicdomain/zero/1.0/)`;
      break;
    case "Eclipse Public License 2.0":
      licenseBadge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`;
      break;
    case "GNU Affero General Public License v3.0":
      licenseBadge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`;
      break;
    case "GNU General Public License v2.0":
      licenseBadge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`;
      break;
    case "Mozilla Public License 2.0":
      licenseBadge = `[![License: MPL 2.0](https://img.shields.io/badge/License-MPL_2.0-brightgreen.svg)](https://opensource.org/licenses/MPL-2.0)`;
      break;
    case "The Unlicense":
      licenseBadge = `[![License: Unlicense](https://img.shields.io/badge/license-Unlicense-blue.svg)](http://unlicense.org/)`;
      break;
    default:
      licenseBadge = "";
  }
  return licenseBadge;
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
export function renderLicenseSection(License) {
  let licenseDescription = "";
  switch (License) {
    case "Apache License 2.0":
      licenseDescription =
        "A permissive license that allows you to freely use, modify, and distribute the software, with attribution.";
      break;
    case "GNU General Public License v3.0":
      licenseDescription =
        "A strong copyleft license that requires modifications to be released as open-source if distributed.";
      break;
    case "MIT License":
      licenseDescription =
        "A permissive license that allows reuse with virtually no restrictions, with attribution required.";
      break;
    case "BSD 2-Clause 'Simplified' License":
      licenseDescription =
        "A permissive license similar to the MIT License, but with a simpler structure.";
      break;
    case "BSD 3-Clause 'New' or 'Revised' License":
      licenseDescription =
        "A permissive license like the BSD 2-Clause License, but with an additional clause prohibiting endorsement of derived products.";
      break;
    case "Boost Software License 1.0":
      licenseDescription =
        "A permissive license that is specifically designed for the Boost C++ Libraries.";
      break;
    case "Creative Commons Zero v1.0 Universal":
      licenseDescription =
        "A public domain dedication that allows you to do anything with the work without restrictions.";
      break;
    case "Eclipse Public License 2.0":
      licenseDescription =
        "A weak copyleft license that requires modifications to be open-sourced if distributed as binaries.";
      break;
    case "GNU Affero General Public License v3.0":
      licenseDescription =
        "A copyleft license that extends the GPL to cover remote network interactions.";
      break;
    case "GNU General Public License v2.0":
      licenseDescription =
        "An older version of the GPL, requiring derivative works to be licensed under the same terms.";
      break;
    case "Mozilla Public License 2.0":
      licenseDescription =
        "A weak copyleft license that allows linking with non-open-source code.";
      break;
    case "The Unlicense":
      licenseDescription =
        "A public domain dedication that allows you to do anything with the code without any conditions.";
      break;
    default:
      licenseDescription = "";
  }
  return licenseDescription;
}

// TODO: Create a function to generate markdown for README
export default function generateMarkdown(data) {
  let licenseBadge = renderLicenseBadge(data.License);
  let licenseDescription = renderLicenseSection(data.License);
  return `
  # ${data.Title}
  ${licenseBadge}
  
  ## Description
  ${data.Description}
  
  ## Table of Contents
  - [Installation](#installation)
  - [Usage](#usage)
  - [Contributing](#contributing)
  - [Tests](#tests)
  - [License](#license)
  - [Questions](#questions)
  
  ## Installation
  ${data.Installation}
  
  ## Usage
  ${data.Usage}
  
  ## Contributing
  ${data.Contributing}
  
  ## Tests
  ${data.Tests}
  
  ## License
  ${data.License}
  ${licenseDescription}
  
  ## Questions
  Contact me with any questions!
  
  Github: https://github.com/${data.Username}  
  Email: ${data.Email}
  `;
}
