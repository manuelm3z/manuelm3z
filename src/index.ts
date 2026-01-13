#!/usr/bin/env node

import chalk from 'chalk';
import boxen from 'boxen';
import type { Options } from 'boxen';

const options: Options = {
  padding: 1,
  margin: 1,
  borderStyle: 'round',
};

const data = {
  name: chalk.white('Manuel Zambrano /'),
  handle: chalk.cyan('manuelm3z'),
  work: chalk.white('Software Engineer'),
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
  labelWeb: chalk.white.bold('     Web:'),
};

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
