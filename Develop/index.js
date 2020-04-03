const api = require("./utils/api");
const generateMarkdown = require("./utils/generateMarkdown");
const inquirer = require("inquirer");

const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

const questions = [
  "Enter your GitHub username:",
  "Enter your Project title:",
  "Enter your Project description:",
  "Enter name of the repo:"
];

function writeToFile(fileName, ...data) {
  const contents = generateMarkdown(data);
  writeFileAsync(fileName, contents).then(function() {
    console.log("Successfully wrote to Readme.md file");
  });
}

let user;
let enteredDetails;
async function init() {
  try {
    await inquirer
      .prompt([
        {
          message: questions[0],
          name: "username"
        },
        {
          message: questions[1],
          name: "title"
        },
        {
          message: questions[2],
          name: "desc"
        },
        {
          message: questions[3],
          name: "repo"
        }
      ])
      .then(function(response) {
        enteredDetails = response;
        user = response.username;
      });
    await api.getUser(user);
    await writeToFile("Readme.md", enteredDetails, api.data, questions);
  } catch (err) {
    console.log("Can not read properties.");
  }
}
init();
