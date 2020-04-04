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
      },
      {
        message: "Enter your Project title:",
        name: "title",
      },
      {
        message: "Enter your Project description:",
        name: "desc",
      },
      {
        message: "Enter name of the repo:",
        name: "repo",
      },
    ]);
    const { data } = await api.getUser(username);
    console.log(data);
    const contents = generateMarkdown(username, title, desc, repo, data);
    await writeFileAsync("Readme.md", contents);
    console.log("Successfully wrote to Readme.md file");
  } catch (err) {
    console.log("Can not read properties.");
  }
}
init();
