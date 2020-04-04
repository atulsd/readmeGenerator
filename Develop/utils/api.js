const axios = require("axios");
require("dotenv").config();

const clientId = process.env.ClientId;
const clientSecret = process.env.ClientSecret;

const getUser = async (username) => {
  try {
    const queryUrl = `https://api.github.com/users/${username}?client_id=${clientId}&client_secret=${clientSecret}`;
    return await axios.get(queryUrl);
  } catch (err) {
    console.log("Please check your details.");
  }
};

module.exports = { getUser };
