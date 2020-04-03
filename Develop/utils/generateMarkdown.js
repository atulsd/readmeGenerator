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
  [Licence](#Licence:)\n
  [Contributing](#Contributing:)\n
  [Tests](#Tests:)\n
  [Questions](#Questions:)\n
  # Description:\n
  ${data[0].desc}\n
  # Installation:\n
  Navigate to following folder\n
  ${data[1].data.html_url + "/" + data[0].repo}\n
  Clone the Repo\n
  To view the web pages go to the following link\n
  https://${data[1].data.login}.github.io/${data[0].repo}\n
  # Usage\n
  # Licence\n
  # Contributing\n
  # Tests\n
  # Questions\n
  1. ${data[2][0]}\n
  2. ${data[2][1]}\n
  3. ${data[2][2]}\n
  4. ${data[2][3]}\n
`;
}

module.exports = generateMarkdown;
