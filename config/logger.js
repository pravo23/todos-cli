const chalk = require("chalk");
const debug = require("debug");
const constants = require("../constants");

const createLogger = (name) => ({
  log: (...args) => console.log(chalk.gray(...args)),
  warning: (...args) => console.log(chalk.bold.yellow(...args)),
  info: (...args) => console.log(chalk.yellowBright(...args)),
  success: (...args) => console.log(chalk.greenBright(...args)),
  highlight: (...args) => console.log(chalk.bold.blue(...args)),
  alert: (...args) => console.log(chalk.bold.red(...args)),
  debug: debug(name),
});

const logger = createLogger(constants.cliToolLoggerName);

module.exports = logger;
