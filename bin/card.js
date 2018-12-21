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
  work: chalk.white('FrontEnd Developer at stensul'),
  twitter: chalk.cyan('https://twitter.com/manuelm3z'),
  github: chalk.cyan('https://github.com/manuelm3z'),
  linkedin: chalk.cyan('https://www.linkedin.com/in/manuelm3z'),
  npx: chalk.white('npx manuelm3z'),
  labelWork: chalk.white.bold('    Work:'),
  labelTwitter: chalk.white.bold(' Twitter:'),
  labelGithub: chalk.white.bold('  Github:'),
  labelLinkedIn: chalk.white.bold('LinkedIn:'),
  labelCard: chalk.white.bold('    Card:')
};

// Actual strings we're going to output
const newline = '\n';
const heading = `${data.name} ${data.handle}`;
const working = `${data.labelWork} ${data.work}`;
const twittering = `${data.labelTwitter} ${data.twitter}`;
const gituhubing = `${data.labelGithub} ${data.github}`;
const linkedining = `${data.labelLinkedIn} ${data.linkedin}`;
const carding = `${data.labelCard} ${data.npx}`;

// Pull all our output together into a single variable so we can use boxen effectively
const output = heading + newline + newline + working + newline + twittering + newline + gituhubing + newline + linkedining + newline + carding;

console.log(chalk.green(boxen(output, options)));