const axios = require("axios");

const api = {
  data: "",
  async getUser(username) {
    try {
      const queryUrl = `https://api.github.com/users/${username}`;
      await axios.get(queryUrl).then(function(res) {
        api.data = res;
      });
    } catch (err) {
      console.log("Please check your details.");
    }
  }
};

module.exports = api;
