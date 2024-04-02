const conf = new (require("conf"))();
const chalk = require("chalk");
const constants = require("../constants")

const list = () => {
  const todoList = conf.get(constants.todoLists);

  if (todoList && todoList.length) {
    // user have tasks in todo-list
    console.log(
      chalk.blue.bold(
        "Task in green are done. task in yellow are still not done.",
      ),
    );

    todoList.forEach((task, index) => {
      if (task.done) {
        console.log(chalk.greenBright(`${index + 1}. ${task.text}`));
      } else {
        console.log(chalk.yellowBright(`${index + 1}. ${task.text}`));
      }
    });
  } else {
    // user does not have task in todo-list
    console.log(chalk.red.bold("You don't have any task yet."));
  }
};

module.exports = list;
