const axios = require("axios");

const api = {
  async getUser(username) {
    try {
      const queryUrl = `https://api.github.com/users/${username}`;
      return await axios.get(queryUrl);
    } catch (err) {
      console.log("Please check your details.");
    }
  },
};

module.exports = api;
