const conf = new (require("conf"))();
const constants = require("../constants");
const logger = require("../config/logger");

const removeTasks = (tasks) => {
  let todoLists = conf.get(constants.todoLists) || [];
  let filteredTodoLists = todoLists.filter(
    (_, index) => !tasks.includes((index + 1).toString()),
  );

  conf.set(constants.todoLists, filteredTodoLists);

  if (todoLists.length > 0) {
    logger.alert(`Tasks: ${tasks.join(", ")} have been removed successfully`);
  } else {
    logger.alert(
      `Tasks: ${tasks.join(", ")} can not be removed as there is not active task present`,
    );
  }
};

module.exports = removeTasks;
