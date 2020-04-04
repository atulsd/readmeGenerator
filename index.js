const api = require("./Develop/utils/api");
const generateMarkdown = require("./Develop/utils/generateMarkdown");
const inquirer = require("inquirer");

const fs = require("fs");
const util = require("util");
const writeFileAsync = util.promisify(fs.writeFile);

async function init() {
  try {
    const { username, title, desc, repo } = await inquirer.prompt([
      {
        message: "Enter your GitHub username:",
        name: "username",
        type: "input",
      },
      {
        message: "Enter your Project title:",
        name: "title",
        type: "input",
      },
      {
        message: "Enter your Project description:",
        name: "desc",
        type: "input",
      },
      {
        message: "Enter name of the repo:",
        name: "repo",
        type: "input",
      },
    ]);
    const { data } = await api.getUser(username);
    const contents = generateMarkdown(username, title, desc, repo, data);
    await writeFileAsync("Readme.md", contents);
    console.log("Successfully wrote to Readme.md file");
  } catch (err) {
    console.log("Can not read properties.");
  }
}
init();
