#!/usr/bin/env node
// 👆 Used to tell Node.js that this is a CLI tool

// Pull in our modules
const chalk = require('chalk');
const boxen = require('boxen');

// Define options for Boxen
const options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round'
};

// Text + chalk definitions
const data = {
  name: chalk.white('Manuel Zambrano / '),
  handle: chalk.cyan('manuelm3z'),
  work: chalk.white('FrontEnd Developer at iúnigo'),
  twitter: chalk.cyan('https://twitter.com/manuelm3z'),
  github: chalk.cyan('https://github.com/manuelm3z'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/manuelm3z'),
  npx: chalk.white('npx manuelm3z'),
  web: chalk.white('https://manuelm3z.github.io'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGithub: chalk.white.bold('  Github:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('    Card:'),
  labelWeb: chalk.white.bold('     Web:')
};

// Actual strings we're going to output
const output = `\n
  ${data.name} ${data.handle}
  ${data.labelWork} ${data.work}
  ${data.labelTwitter} ${data.twitter}
  ${data.labelGithub} ${data.github}
  ${data.labelLinkedIn} ${data.linkedin}
  ${data.labelCard} ${data.npx}
  ${data.labelWeb} ${data.web}
  \n`;

console.log(chalk.green(boxen(output, options)));