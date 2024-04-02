const conf = new (require("conf"))();
const chalk = require("chalk");
const constants = require('../constants');

const removeTasks = (tasks) => {
  let todoLists = conf.get(constants.todoLists) || [];
  let filteredTodoLists = todoLists.filter(
    (_, index) => !tasks.includes((index + 1).toString()),
  );

  conf.set(constants.todoLists, filteredTodoLists);

  if (tasks.length > 0) {
    console.log(
      chalk.red.bold(
        `Tasks: ${tasks.join(", ")} have been removed successfully`,
      ),
    );
  }
};

module.exports = removeTasks;
