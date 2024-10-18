// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// Global variables
// let year = new Date().getFullYear();

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Username",
    message: colors.magenta("Github username: "),
  },
  {
    type: "input",
    name: "Title",
    message: colors.magenta("Project title: "),
  },
  {
    type: "input",
    name: "Description",
    message: colors.magenta("Project description:"),
  },
  {
    type: "input",
    name: "Installation",
    message: colors.magenta("Project installation instructions: "),
  },
  {
    type: "input",
    name: "Usage",
    message: colors.magenta("Project usage information: "),
  },
  {
    type: "input",
    name: "Contributing",
    message: colors.magenta("Project contribution guidelines: "),
  },
  {
    type: "input",
    name: "Tests",
    message: colors.magenta("Project test instructions: "),
  },
  {
    type: "list",
    name: "License",
    message: colors.brightMagenta("Select a license"),
    choices: [
      "Apache License 2.0",
      "GNU General Public License v3.0",
      "MIT License",
      "BSD 2-Clause 'Simplified' License",
      "BSD 3-Clause 'New' or 'Revised' License",
      "Boost Software License 1.0",
      "Creative Commons Zero v1.0 Universal",
      "Eclipse Public License 2.0",
      "GNU Affero General Public License v3.0",
      "GNU General Public License v2.0",
      "GNU Lesser General Public License v2.1",
      "Mozilla Public License 2.0",
      "The Unlicense",
    ],
  },
  {
    type: "input",
    name: "Username",
    message: colors.magenta("Github username: "),
  },
  {
    type: "input",
    name: "Email",
    message: colors.magenta("Email address: "),
  },
];

// TODO: Create a function to assign a license description based on user selection
function getLicenseDescription(selectedLicense) {
  let licenseDescription = "";
  switch (selectedLicense) {
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
    case "GNU Lesser General Public License v2.1":
      licenseDescription =
        "A weak copyleft license primarily used for software libraries, allowing linking to non-GPL software.";
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
      licenseDescription = "Unknown license selected.";
  }
}

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  let licenseDescription = getLicenseDescription(data.License);
  const readmeContent = `
  # ${data.Title}
  
  ## Description
  ${data.Description}
  
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
  fs.writeFile(fileName, readmeContent, (err) => {
    if (err) {
      console.error("Error writing file: ", err);
    } else {
      console.log("README.md has been generated successfully!");
    }
  });
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      writeToFile("README.md", answers);
    })
    .catch((error) => {
      console.error("Error initializing app: ", error);
    });
}

// Function call to initialize app
init();
