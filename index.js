import generateMarkdown, {
  renderLicenseBadge,
  renderLicenseSection,
} from "./Develop/utils/generateMarkdown.js";

// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// Global variables
let year = new Date().getFullYear();

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

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  const markdownData = generateMarkdown(data);
  fs.writeFile(fileName, markdownData, (err) => {
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
      writeToFile("./Readme-files/README.md", answers);
    })
    .catch((error) => {
      console.error("Error initializing app: ", error);
    });
}

// Function call to initialize app
init();
