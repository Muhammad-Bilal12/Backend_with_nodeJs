const chalk = require("chalk");
const validator = require("validator");


// console.log(chalk.blue("Hello World!"));
// console.log(chalk.blue.inverse("Hello World!"));
// console.log(chalk.red.inverse("Error!"));
// console.log(chalk.green.inverse("Success"));
// console.log(chalk.yellow.inverse("Warn"));


var res = validator.isEmail("bilalgmail.com");

console.log(res ? chalk.green.inverse(res) : chalk.red.inverse(res));