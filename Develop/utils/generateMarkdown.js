function generateMarkdown(data) {
  return `
  # Project Title: ${data[0].title}\n
  # Profile Image\n
  ![Screenshot](${data[1].data.avatar_url})\n
  # Email Address\n
  ${data[1].data.email}\n
  Table of Contents:\n
  [Description](#Description:)\n
  [Installation](#Installation:)\n
  [Usage](#Usage:)\n
  [Licence](#Licene:)\n
  [Contributing](#Contributing:)\n
  [Tests](#Tests:)\n
  [Questions](#Questions:)\n


`;
}

module.exports = generateMarkdown;
