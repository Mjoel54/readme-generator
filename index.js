// TODO: Include packages needed for this application
import inquirer from "inquirer";
import colors from "colors";
import fs from "fs";

// TODO: Create an array of questions for user input
const questions = [
  {
    type: "input",
    name: "Sample Question 1",
    message: colors.magenta("Question text here"),
  },
  {
    type: "checkbox",
    message: colors.brightMagenta("Question text here"),
    name: "Checkbox list",
    choices: [],
  },
  {
    type: "list",
    message: colors.brightMagenta("Question text"),
    name: "List question",
    choices: [],
  },
];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
