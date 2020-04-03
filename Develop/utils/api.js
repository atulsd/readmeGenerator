const axios = require("axios");
const inquirer = require("inquirer");

const api = {
  getUser(username) {
    inquirer
      .prompt({
        type: "input",
        message: "Enter your GitHub username",
        name: "username"
      })
      .then(function({ username }) {
        const queryUrl = `https://api.github.com/users/${username}`;
        axios.get(queryUrl).then(function(res) {
          console.log(res.data.avatar_url);
          console.log(res.data.email);
        });
      });
  }
};

module.exports = api;
