const conf = new (require("conf"))();
const chalk = require("chalk");

const removeTasks = (tasks) => {
  let todosList = conf.get("todo-list") || [];
  let filteredTodoLists = todosList.filter(
    (_, index) => !tasks.includes((index + 1).toString()),
  );

  conf.set("todo-list", filteredTodoLists);

  if (tasks.length > 0) {
    console.log(
      chalk.red.bold(
        `Tasks: ${tasks.join(", ")} have been removed successfully`,
      ),
    );
  }
};

module.exports = removeTasks;
