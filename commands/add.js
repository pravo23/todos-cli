const conf = new (require("conf"))();
const chalk = require("chalk");
const constants = require('../constants');

const add = (task) => {
  let todoLists = conf.get(constants.todoLists);

  if (!todoLists) {
    todoLists = [];
  }

  todoLists.push({
    text: task,
    done: false,
  });

  conf.set(constants.todoLists, todoLists);
  console.log(chalk.green.bold("Task has been added successfully!"));
};

module.exports = add;
