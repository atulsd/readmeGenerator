function generateMarkdown(username, title, desc, repo, data) {
  return `
  [![Coding My Life](https://img.shields.io/badge/AtulMahajan-FullStackDeveloper-blue)](https://img.shields.io/)\n
  [![made-with-Markdown](https://img.shields.io/badge/Made%20with-Markdown-1f425f.svg)](http://commonmark.org)\n
  # Project Title: ${title}\n
  # Profile Image\n
  ![Screenshot](${data.avatar_url})\n
  # Email Address\n
  ${data.email}\n
  Table of Contents:\n
  [Description](#Description:)\n
  [Installation](#Installation:)\n
  [Usage](#Usage:)\n
  [Licence](#Licence:)\n
  [Contributing](#Contributing:)\n
  [Tests](#Tests:)\n
  [Questions](#Questions:)\n
  # Description:\n
  ${desc}\n
  # Installation:\n
  Navigate to following folder\n
  ${data.html_url + "/" + repo}\n
  Clone the Repo\n
  To view the web pages go to the following link\n
  https://${data.login}.github.io/${repo}\n
  # Usage\n
  This project generates a read me file using questions answered by the user.\n
  # Licence\n
  [![Version Badge](https://img.shields.io/badge/Version-1.0.1-green)](https://shields.io/#your-badge)\n
  # Contributing\n
  This project is an open source and anyone is free to use with the reference to it.\n
  # Tests\n
  Github Api is called and then required information is retrieved for testing and generating readme file.\n 
  # Questions\n
  1. Enter your GitHub username:\n
  2. Enter your Project title:\n
  3. Enter your Project description:\n
  4. Enter name of the repo:\n
`;
}

module.exports = generateMarkdown;
