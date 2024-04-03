const conf = new (require("conf"))();
const constants = require("../constants");
const logger = require("../config/logger");

const list = () => {
  const todoList = conf.get(constants.todoLists);

  if (todoList && todoList.length) {
    logger.highlight(
      "Task in green are done. task in yellow are still not done.",
    );

    todoList.forEach((task, index) => {
      let message = `${index + 1}. ${task.text}`;
      if (task.done) {
        logger.success(message);
      } else {
        logger.info(message);
      }
    });
  } else {
    // user does not have task in todo-list
    logger.alert("You don't have any task yet.");
  }
};

module.exports = list;
